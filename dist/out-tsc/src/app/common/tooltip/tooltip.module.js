import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipViewComponent } from './tooltip-view.component';
import { TooltipService } from './tooltip.service';
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        NgModule({
            imports: [
                NgCommonModule,
            ],
            entryComponents: [TooltipViewComponent],
            declarations: [
                TooltipComponent,
                TooltipViewComponent,
            ],
            exports: [
                TooltipComponent,
                TooltipViewComponent,
            ],
            providers: [
                TooltipService,
            ],
        })
    ], TooltipModule);
    return TooltipModule;
}());
export { TooltipModule };
//# sourceMappingURL=tooltip.module.js.map