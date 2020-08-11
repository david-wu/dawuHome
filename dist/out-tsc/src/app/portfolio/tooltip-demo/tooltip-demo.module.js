import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { TooltipDemoComponent } from './tooltip-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';
var TooltipDemoModule = /** @class */ (function () {
    function TooltipDemoModule() {
    }
    TooltipDemoModule = __decorate([
        NgModule({
            imports: [
                NgCommonModule,
                TooltipModule,
            ],
            declarations: [
                TooltipDemoComponent,
            ],
            exports: [
                TooltipDemoComponent,
            ],
        })
    ], TooltipDemoModule);
    return TooltipDemoModule;
}());
export { TooltipDemoModule };
//# sourceMappingURL=tooltip-demo.module.js.map