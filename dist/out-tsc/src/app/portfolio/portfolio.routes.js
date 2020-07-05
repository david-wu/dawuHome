import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
var routes = [
    {
        path: '',
        component: PortfolioComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
var PortfolioRoutingModule = /** @class */ (function () {
    function PortfolioRoutingModule() {
    }
    PortfolioRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], PortfolioRoutingModule);
    return PortfolioRoutingModule;
}());
export { PortfolioRoutingModule };
//# sourceMappingURL=portfolio.routes.js.map