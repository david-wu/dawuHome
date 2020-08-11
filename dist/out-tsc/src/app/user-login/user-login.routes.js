import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from '@app/user-login/user-login.component';
var routes = [
    {
        path: 'auth',
        component: UserLoginComponent
    },
    {
        path: 'auth-success',
        component: UserLoginComponent
    },
];
var UserLoginRoutingModule = /** @class */ (function () {
    function UserLoginRoutingModule() {
    }
    UserLoginRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UserLoginRoutingModule);
    return UserLoginRoutingModule;
}());
export { UserLoginRoutingModule };
//# sourceMappingURL=user-login.routes.js.map