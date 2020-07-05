import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
var routes = [
    {
        path: 'about-me',
        loadChildren: function () { return import('./about-me/about-me.module').then(function (m) { return m.AboutMeModule; }); }
    },
    {
        path: 'portfolio',
        loadChildren: function () { return import('./portfolio/portfolio.module').then(function (m) { return m.PortfolioModule; }); }
    },
    {
        path: 'corona',
        loadChildren: function () { return import('./corona/corona.module').then(function (m) { return m.CoronaModule; }); }
    },
    {
        path: 'poe',
        loadChildren: function () { return import('./poe/poe.module').then(function (m) { return m.PoeModule; }); }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'corona'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, {
                    useHash: true,
                    preloadingStrategy: PreloadAllModules,
                }),
            ],
            exports: [RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map