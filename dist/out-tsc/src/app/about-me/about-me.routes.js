import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '@src/app/about-me/about-me.component';
var routes = [
    {
        path: '',
        component: AboutMeComponent
    }
];
var AboutMeRoutingModule = /** @class */ (function () {
    function AboutMeRoutingModule() {
    }
    AboutMeRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AboutMeRoutingModule);
    return AboutMeRoutingModule;
}());
export { AboutMeRoutingModule };
//# sourceMappingURL=about-me.routes.js.map