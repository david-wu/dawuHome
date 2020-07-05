import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { BarChartModule } from '@common/charts/bar-chart/bar-chart.module';
import { BarChartDemoComponent } from './bar-chart-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';
var BarChartDemoModule = /** @class */ (function () {
    function BarChartDemoModule() {
    }
    BarChartDemoModule = __decorate([
        NgModule({
            imports: [
                NgCommonModule,
                TooltipModule,
                BarChartModule,
            ],
            declarations: [
                BarChartDemoComponent,
            ],
            exports: [
                BarChartDemoComponent,
            ],
        })
    ], BarChartDemoModule);
    return BarChartDemoModule;
}());
export { BarChartDemoModule };
//# sourceMappingURL=bar-chart-demo.module.js.map