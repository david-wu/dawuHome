import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartLegendComponent } from './chart-legend/chart-legend.component';
import { StatViewerComponent } from './stat-viewer/stat-viewer.component';
import { BarChartModule } from './bar-chart/bar-chart.module';
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                BarChartModule,
            ],
            declarations: [
                LineChartComponent,
                ChartLegendComponent,
                StatViewerComponent,
            ],
            exports: [
                BarChartModule,
                LineChartComponent,
                ChartLegendComponent,
                StatViewerComponent,
            ],
            providers: [],
        })
    ], ChartsModule);
    return ChartsModule;
}());
export { ChartsModule };
//# sourceMappingURL=charts.module.js.map