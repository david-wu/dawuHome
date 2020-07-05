import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { round } from 'lodash';
import * as d3 from 'd3';
import { CoronaDataExtractor, CoronaKeys, NormalKeys, Labels, } from '../models/index';
import { getDateFromLeadingYearStr, } from '@src/app/utils/index';
var CoronaDashboardComponent = /** @class */ (function () {
    function CoronaDashboardComponent() {
        var _a, _b;
        this.disabledBarKeys = new Set();
        this.population = 0;
        this.disabledBarKeysChange = new EventEmitter();
        this.disabledNormalKeys = new Set();
        this.disabledNormalKeysChange = new EventEmitter();
        this.isViewingNormalized = false;
        this.isViewingNormalizedChange = new EventEmitter();
        this.isViewingLineChart = false;
        this.isViewingLineChartChange = new EventEmitter();
        this.coronaExtractor = new CoronaDataExtractor();
        this.hoverIndex = 0;
        this.distanceFromPointToAvg = 0;
        this.CoronaKeys = CoronaKeys;
        this.NormalKeys = NormalKeys;
        this.Labels = Labels;
        this.coronaKeys = [
            CoronaKeys.NEW,
            CoronaKeys.ACTIVE,
            CoronaKeys.RECOVERED,
            CoronaKeys.NEW_DEATHS,
            CoronaKeys.DEATHS,
        ];
        this.coronaViewKeys = [
            CoronaKeys.CASES,
            CoronaKeys.TIMESTAMP,
            CoronaKeys.NEW,
            CoronaKeys.ACTIVE,
            CoronaKeys.RECOVERED,
            CoronaKeys.NEW_DEATHS,
            CoronaKeys.DEATHS,
        ];
        this.perMilKeys = [
            NormalKeys.NEW,
            NormalKeys.ACTIVE,
            NormalKeys.RECOVERED,
            NormalKeys.NEW_DEATHS,
            NormalKeys.DEATHS,
        ];
        this.perMilViewKeys = [
            NormalKeys.CASES,
            CoronaKeys.TIMESTAMP,
            NormalKeys.NEW,
            NormalKeys.ACTIVE,
            NormalKeys.RECOVERED,
            NormalKeys.NEW_DEATHS,
            NormalKeys.DEATHS,
        ];
        this.coronaColorsByKey = (_a = {},
            _a[CoronaKeys.NEW] = '#ED9797',
            _a[CoronaKeys.ACTIVE] = '#AD3E3E',
            _a[CoronaKeys.RECOVERED] = '#34A2AA',
            _a[CoronaKeys.DEATHS] = '#2B1919',
            _a[CoronaKeys.NEW_DEATHS] = '#65635F',
            _a[NormalKeys.NEW] = '#ED9797',
            _a[NormalKeys.ACTIVE] = '#AD3E3E',
            _a[NormalKeys.RECOVERED] = '#34A2AA',
            _a[NormalKeys.DEATHS] = '#2B1919',
            _a[NormalKeys.NEW_DEATHS] = '#65635F',
            _a[NormalKeys.CASES] = '#D6B902',
            _a[NormalKeys.R] = '#65635F',
            _a[NormalKeys.R_AVG] = '#1D62C4',
            _a);
        this.normalKeys = [
            NormalKeys.R,
            NormalKeys.R_AVG,
        ];
        this.normalizedViewKeys = [
            NormalKeys.R_AVG,
            NormalKeys.R,
            CoronaKeys.TIMESTAMP,
            CoronaKeys.CASES,
        ];
        this.formattersByKeys = (_b = {},
            _b[NormalKeys.R_AVG] = this.toPercentage,
            _b[NormalKeys.R] = this.toPercentage,
            _b[CoronaKeys.TIMESTAMP] = d3.timeFormat('%-m/%e'),
            _b);
    }
    CoronaDashboardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.cleanJh(this.coronaFile, this.population, this.distanceFromPointToAvg);
            this.hoverIndex = this.coronaData.length - 1;
        }
        if (changes.lockdownInfo) {
            if (this.lockdownInfo) {
                var startDate = getDateFromLeadingYearStr(this.lockdownInfo.startDate);
                var endDate = getDateFromLeadingYearStr(this.lockdownInfo.endDate);
                var tenDaysLater = new Date(startDate);
                tenDaysLater.setDate(startDate.getDate() + 10);
                this.indicators = this.lockdownInfo && [
                    {
                        value: +startDate,
                        label: 'Start Lockdown',
                        color: '#164EB7',
                    },
                    {
                        value: +endDate,
                        label: 'End Lockdown',
                        color: '#729900',
                    },
                ];
            }
            else {
                this.indicators = undefined;
            }
        }
    };
    CoronaDashboardComponent.prototype.onChangeAvgedDays = function (distanceFromPointToAvg) {
        this.distanceFromPointToAvg = distanceFromPointToAvg;
        this.coronaData = this.coronaExtractor.cleanJh(this.coronaFile, this.population, distanceFromPointToAvg);
    };
    CoronaDashboardComponent.prototype.onChangeNormalized = function (isViewingNormalized) {
        this.disabledBarKeysChange.emit(new Set());
        this.isViewingNormalized = isViewingNormalized;
        this.isViewingNormalizedChange.emit(isViewingNormalized);
    };
    CoronaDashboardComponent.prototype.onChangeViewingLineChart = function (isViewingLineChart) {
        this.isViewingLineChart = isViewingLineChart;
        this.isViewingLineChartChange.emit(isViewingLineChart);
    };
    CoronaDashboardComponent.prototype.toPercentage = function (d) {
        return round(d * 100, 2) + "%";
    };
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "lockdownInfo", void 0);
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "coronaFile", void 0);
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "disabledBarKeys", void 0);
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "population", void 0);
    __decorate([
        Output()
    ], CoronaDashboardComponent.prototype, "disabledBarKeysChange", void 0);
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "disabledNormalKeys", void 0);
    __decorate([
        Output()
    ], CoronaDashboardComponent.prototype, "disabledNormalKeysChange", void 0);
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "isViewingNormalized", void 0);
    __decorate([
        Output()
    ], CoronaDashboardComponent.prototype, "isViewingNormalizedChange", void 0);
    __decorate([
        Input()
    ], CoronaDashboardComponent.prototype, "isViewingLineChart", void 0);
    __decorate([
        Output()
    ], CoronaDashboardComponent.prototype, "isViewingLineChartChange", void 0);
    CoronaDashboardComponent = __decorate([
        Component({
            selector: 'dwu-corona-dashboard',
            templateUrl: './corona-dashboard.component.html',
            styleUrls: ['./corona-dashboard.component.scss']
        })
    ], CoronaDashboardComponent);
    return CoronaDashboardComponent;
}());
export { CoronaDashboardComponent };
//# sourceMappingURL=corona-dashboard.component.js.map