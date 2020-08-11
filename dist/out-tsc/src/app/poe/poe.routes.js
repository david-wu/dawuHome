import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoeComponent } from '@src/app/poe/poe.component';
var routes = [
    {
        path: '',
        component: PoeComponent
    }
];
var PoeRoutingModule = /** @class */ (function () {
    function PoeRoutingModule() {
    }
    PoeRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], PoeRoutingModule);
    return PoeRoutingModule;
}());
export { PoeRoutingModule };
//# sourceMappingURL=poe.routes.js.map