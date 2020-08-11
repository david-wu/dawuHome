import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoronaComponent } from '@src/app/corona/corona.component';
export var routes = [
    {
        path: '',
        component: CoronaComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
var CoronaRoutingModule = /** @class */ (function () {
    function CoronaRoutingModule() {
    }
    CoronaRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], CoronaRoutingModule);
    return CoronaRoutingModule;
}());
export { CoronaRoutingModule };
//# sourceMappingURL=corona.routes.js.map