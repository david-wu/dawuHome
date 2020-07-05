import { __decorate, __read } from "tslib";
import { Component, Input, } from '@angular/core';
import { round, set, } from 'lodash';
import { CoronaDataExtractor, CoronaKeys, NormalKeys, Labels, } from '../models/index';
var CoronaCompareDashboardComponent = /** @class */ (function () {
    function CoronaCompareDashboardComponent() {
        this.coronaExtractor = new CoronaDataExtractor();
        this.hoverIndex = 0;
        this.distanceFromPointToAvg = 0;
        this.isViewingNormalized = true;
        this.selectedMetricIndex = 0;
        this.metricsByNormalized = {
            CASE: [
                CoronaKeys.CASES,
                CoronaKeys.NEW,
                CoronaKeys.ACTIVE,
                CoronaKeys.RECOVERED,
                CoronaKeys.DEATHS,
                CoronaKeys.NEW_DEATHS,
            ],
            NORM: [
                NormalKeys.CASES,
                NormalKeys.NEW,
                NormalKeys.ACTIVE,
                NormalKeys.RECOVERED,
                NormalKeys.DEATHS,
                NormalKeys.NEW_DEATHS,
            ],
        };
        this.isViewingRAvg = true;
        this.colorScheme = [
            '#B24C63',
            '#5438DC',
            '#357DED',
            '#56EEF4',
            '#92D5E6',
            '#772D8B',
            '#5A0B4D',
            '#A1EF8B',
        ];
        this.Labels = Labels;
        this.CoronaKeys = CoronaKeys;
        this.NormalKeys = NormalKeys;
    }
    CoronaCompareDashboardComponent.prototype.ngOnChanges = function (changes) {
        if (this.coronaFilesWithFileId && this.filesById) {
            this.setup(this.coronaFilesWithFileId, this.filesById, this.populationsByFileId);
        }
    };
    CoronaCompareDashboardComponent.prototype.onChangeNormalized = function (isViewingNormalized) {
        this.isViewingNormalized = isViewingNormalized;
        this.refreshCompareTable();
    };
    CoronaCompareDashboardComponent.prototype.onSelectMetricIndex = function (index) {
        this.selectedMetricIndex = index;
        this.refreshCompareTable();
    };
    CoronaCompareDashboardComponent.prototype.setViewingRAvg = function (isViewingRAvg) {
        this.isViewingRAvg = isViewingRAvg;
        this.refreshRTable();
    };
    CoronaCompareDashboardComponent.prototype.setup = function (coronaFilesWithFileId, filesById, populationsByFileId) {
        var _this = this;
        this.refreshCompareTable();
        this.refreshRTable();
        this.hoverIndex = this.compareData.length - 1;
        var fileIds = coronaFilesWithFileId.map(function (_a) {
            var _b = __read(_a, 2), coronaFile = _b[0], fileId = _b[1];
            return fileId;
        });
        this.compareKeys = fileIds;
        this.compareColorsByKey = {};
        this.compareLabelsByKey = {};
        this.rFormattersByKeys = {};
        this.compareKeys.forEach(function (key, index) {
            var colorIndex = index % _this.colorScheme.length;
            _this.compareColorsByKey[key] = _this.colorScheme[colorIndex];
            _this.compareLabelsByKey[key] = _this.filesById[key].label || key;
            _this.rFormattersByKeys[key] = function (d) { return _this.toPercentage(d); };
        });
    };
    CoronaCompareDashboardComponent.prototype.getDataForMetric = function (coronaFilesWithFileId, metric, distanceFromPointToAvg) {
        var _this = this;
        if (distanceFromPointToAvg === void 0) { distanceFromPointToAvg = 0; }
        var coronaFilesByFileId = {};
        coronaFilesWithFileId.forEach(function (_a) {
            var _b = __read(_a, 2), file = _b[0], fileId = _b[1];
            return coronaFilesByFileId[fileId] = file;
        });
        var dataByTimestamp = {};
        var fileIds = [];
        coronaFilesWithFileId.forEach(function (_a) {
            var _b = __read(_a, 2), coronaFile = _b[0], fileId = _b[1];
            var cleanData = _this.coronaExtractor.cleanJh(coronaFile, _this.populationsByFileId[fileId], _this.distanceFromPointToAvg);
            fileIds.push(fileId);
            cleanData.forEach(function (column) {
                set(dataByTimestamp, [column.timestamp, fileId], column[metric]);
                set(dataByTimestamp, [column.timestamp, CoronaKeys.TIMESTAMP], column.timestamp);
            });
        });
        var sortedTimestamps = Object.keys(dataByTimestamp).sort();
        return sortedTimestamps.map(function (timestamp) { return dataByTimestamp[timestamp]; });
    };
    CoronaCompareDashboardComponent.prototype.refreshCompareTable = function () {
        if (!this.coronaFilesWithFileId) {
            return;
        }
        var selectedMetric = this.getSelectedMetric();
        this.compareData = this.getDataForMetric(this.coronaFilesWithFileId, selectedMetric, this.distanceFromPointToAvg);
    };
    CoronaCompareDashboardComponent.prototype.refreshRTable = function () {
        if (!this.coronaFilesWithFileId) {
            return;
        }
        this.compareRData = this.getDataForMetric(this.coronaFilesWithFileId, this.isViewingRAvg ? NormalKeys.R_AVG : NormalKeys.R);
    };
    CoronaCompareDashboardComponent.prototype.getSelectedMetric = function () {
        return this.isViewingNormalized
            ? this.metricsByNormalized.NORM[this.selectedMetricIndex]
            : this.metricsByNormalized.CASE[this.selectedMetricIndex];
    };
    CoronaCompareDashboardComponent.prototype.onChangeAvgedDays = function (distanceFromPointToAvg) {
        this.distanceFromPointToAvg = distanceFromPointToAvg;
        this.refreshCompareTable();
    };
    CoronaCompareDashboardComponent.prototype.toPercentage = function (d) {
        var roundedPercent = round(d * 100, 2);
        return isNaN(roundedPercent) ? '' : roundedPercent + "%";
    };
    __decorate([
        Input()
    ], CoronaCompareDashboardComponent.prototype, "coronaFilesWithFileId", void 0);
    __decorate([
        Input()
    ], CoronaCompareDashboardComponent.prototype, "populationsByFileId", void 0);
    __decorate([
        Input()
    ], CoronaCompareDashboardComponent.prototype, "filesById", void 0);
    CoronaCompareDashboardComponent = __decorate([
        Component({
            selector: 'dwu-corona-compare-dashboard',
            templateUrl: './corona-compare-dashboard.component.html',
            styleUrls: ['./corona-compare-dashboard.component.scss']
        })
    ], CoronaCompareDashboardComponent);
    return CoronaCompareDashboardComponent;
}());
export { CoronaCompareDashboardComponent };
//# sourceMappingURL=corona-compare-dashboard.component.js.map