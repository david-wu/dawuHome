import { __assign } from "tslib";
import { last, mapValues, } from 'lodash';
import { NormalKeys } from './normal-keys.enum';
import { CoronaKeys } from './corona-keys.enum';
import { getDateFromStr } from '@src/app/utils/index';
var CoronaDataExtractor = /** @class */ (function () {
    function CoronaDataExtractor() {
    }
    CoronaDataExtractor.prototype.cleanJh = function (fileData, population, distanceFromPointToAvg) {
        if (population === void 0) { population = 1; }
        if (distanceFromPointToAvg === void 0) { distanceFromPointToAvg = 0; }
        var cleanData = [];
        fileData.forEach(function (point) {
            var _a;
            var cleanPoint = (_a = {
                    dateStr: point.dateStr,
                    date: getDateFromStr(point.dateStr),
                    timestamp: +getDateFromStr(point.dateStr)
                },
                _a[CoronaKeys.CASES] = (point.cases || 0),
                _a[CoronaKeys.DEATHS] = (point.deaths || 0),
                _a[CoronaKeys.NEW_DEATHS] = (point.newDeaths || 0),
                _a[CoronaKeys.RECOVERED] = (point.recovered || 0),
                _a[CoronaKeys.NEW] = (point.new || 0),
                _a);
            cleanPoint[CoronaKeys.ACTIVE] = cleanPoint.cases - cleanPoint.new - cleanPoint.recovered;
            cleanData.push(cleanPoint);
        });
        // if there is a hole in the data, this removes everything before that hole
        var spottyDataClipIndex = 0;
        var overOneDay = (1000 * 60 * 60 * 24) * 1.2;
        for (var i = 1; i < cleanData.length; i++) {
            var point = cleanData[i];
            var previousPoint = cleanData[i - 1];
            if (!previousPoint) {
                break;
            }
            if ((previousPoint.timestamp + overOneDay) < point.timestamp) {
                spottyDataClipIndex = i;
            }
        }
        var unspottyData = cleanData.slice(spottyDataClipIndex);
        // if there's a bunch leading 0's in the data, this removes them except the first 0
        var firstNonZeroIndex = unspottyData.findIndex(function (point) { return point[CoronaKeys.CASES] !== 0; });
        var clipIndex = Math.max(0, firstNonZeroIndex - 1);
        var oneLeadingZeroData = unspottyData.slice(clipIndex);
        var boringDataClipIndex = 0;
        var lastCases = last(oneLeadingZeroData).cases;
        for (var i = 1; i < oneLeadingZeroData.length; i++) {
            var point = oneLeadingZeroData[i];
            if ((point.cases < 100) && ((point.cases / lastCases) < 0.01)) {
                boringDataClipIndex = i;
            }
            else {
                break;
            }
        }
        var coolData = oneLeadingZeroData.slice(boringDataClipIndex);
        if (distanceFromPointToAvg) {
            coolData = this.getAvgSeries(coolData, [
                CoronaKeys.CASES,
                CoronaKeys.DEATHS,
                CoronaKeys.NEW_DEATHS,
                CoronaKeys.RECOVERED,
                CoronaKeys.NEW,
            ], distanceFromPointToAvg);
        }
        ;
        return this.getNormalizedData(coolData, population);
    };
    CoronaDataExtractor.prototype.getNormalizedData = function (cleanData, population) {
        var _a;
        if (population === void 0) { population = 1; }
        var normalizedData = [];
        for (var i = 0; i < cleanData.length; i++) {
            var cleanPoint = cleanData[i];
            var previousCases = cleanPoint.cases - cleanPoint.new;
            var r = previousCases
                ? (cleanPoint.new / previousCases)
                : 1;
            var normalizedPoint = __assign(__assign({}, cleanData[i]), (_a = {}, _a[NormalKeys.R] = r, _a[NormalKeys.CASES] = (cleanPoint.cases / population) * 1000000, _a[NormalKeys.NEW] = (cleanPoint.new / population) * 1000000, _a[NormalKeys.ACTIVE] = (cleanPoint.active / population) * 1000000, _a[NormalKeys.RECOVERED] = (cleanPoint.recovered / population) * 1000000, _a[NormalKeys.DEATHS] = (cleanPoint.deaths / population) * 1000000, _a[NormalKeys.NEW_DEATHS] = (cleanPoint.newDeaths / population) * 1000000, _a));
            normalizedData.push(normalizedPoint);
        }
        for (var i = 0; i < cleanData.length; i++) {
            var ppPreviousPoint = cleanData[i - 3] || { cases: 0, new: 0 };
            var pPreviousPoint = cleanData[i - 2] || { cases: 0, new: 0 };
            var previousPoint = cleanData[i - 1] || { cases: 0, new: 0 };
            var point = cleanData[i];
            var nextPoint = cleanData[i + 1] || { cases: 0, new: 0 };
            var nNextPoint = cleanData[i + 2] || { cases: 0, new: 0 };
            var totalCases = [ppPreviousPoint, pPreviousPoint, previousPoint, point, nextPoint]
                .reduce(function (sum, point) { return sum + point.cases; }, 0);
            var totalNew = [pPreviousPoint, previousPoint, point, nextPoint, nNextPoint]
                .reduce(function (sum, point) { return sum + point.new; }, 0);
            var newR = totalCases ? (totalNew / totalCases) : 1;
            var clippedR = Math.min(newR, 1);
            normalizedData[i][NormalKeys.R_AVG] = clippedR;
        }
        return normalizedData;
    };
    CoronaDataExtractor.prototype.getAvgSeries = function (cleanData, keys, distanceFromPointToAvg) {
        if (distanceFromPointToAvg === void 0) { distanceFromPointToAvg = 3; }
        var avgSeries = [];
        var _loop_1 = function (i) {
            // points towards the ends of the series could be averaged over a smaller number of points
            var startIndex = i - distanceFromPointToAvg;
            var endIndex = i + distanceFromPointToAvg + 1;
            while (startIndex < 0) {
                startIndex++;
                endIndex--;
            }
            while (endIndex > cleanData.length) {
                startIndex++;
                endIndex--;
            }
            var pointsToAvg = cleanData.slice(startIndex, endIndex);
            var sums = {};
            pointsToAvg.forEach(function (point) {
                keys.forEach(function (key) {
                    sums[key] = sums[key]
                        ? sums[key] + point[key]
                        : point[key];
                });
            });
            var avgPoint = mapValues(sums, function (value) { return value / pointsToAvg.length; });
            var newPoint = __assign(__assign({}, cleanData[i]), avgPoint);
            avgSeries.push(newPoint);
        };
        for (var i = 0; i < cleanData.length; i++) {
            _loop_1(i);
        }
        return avgSeries;
    };
    return CoronaDataExtractor;
}());
export { CoronaDataExtractor };
//# sourceMappingURL=corona-data-extractor.model.js.map