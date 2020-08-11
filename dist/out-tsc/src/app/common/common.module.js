import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextDecoratorComponent } from './text-decorator/text-decorator.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ChartsModule } from './charts/charts.module';
import { TooltipModule } from './tooltip/tooltip.module';
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        NgModule({
            imports: [
                NgCommonModule,
                FormsModule,
                ChartsModule,
                TooltipModule,
            ],
            declarations: [
                TextDecoratorComponent,
                SearchInputComponent,
            ],
            exports: [
                ChartsModule,
                TooltipModule,
                TextDecoratorComponent,
                SearchInputComponent,
            ],
            providers: [],
        })
    ], CommonModule);
    return CommonModule;
}());
export { CommonModule };
//# sourceMappingURL=common.module.js.map