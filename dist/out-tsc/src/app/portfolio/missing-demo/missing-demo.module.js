import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MissingDemoComponent } from './missing-demo.component';
// import { MissingDemoModule } from '@common/missing/missing.module';
var MissingDemoModule = /** @class */ (function () {
    function MissingDemoModule() {
    }
    MissingDemoModule = __decorate([
        NgModule({
            imports: [
                NgCommonModule,
            ],
            declarations: [
                MissingDemoComponent,
            ],
            exports: [
                MissingDemoComponent,
            ],
        })
    ], MissingDemoModule);
    return MissingDemoModule;
}());
export { MissingDemoModule };
//# sourceMappingURL=missing-demo.module.js.map