import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { DEMO_PAGE_COMPONENTS } from './index';
var DemoPageModule = /** @class */ (function () {
    function DemoPageModule() {
    }
    DemoPageModule = __decorate([
        NgModule({
            declarations: __spread(DEMO_PAGE_COMPONENTS),
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                LayoutModule,
            ],
            exports: __spread(DEMO_PAGE_COMPONENTS)
        })
    ], DemoPageModule);
    return DemoPageModule;
}());
export { DemoPageModule };
//# sourceMappingURL=demo-page.module.js.map