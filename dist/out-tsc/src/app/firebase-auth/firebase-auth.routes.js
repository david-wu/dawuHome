import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthComponent } from '@src/app/firebase-auth/firebase-auth.component';
var routes = [
    {
        path: 'auth',
        component: FirebaseAuthComponent
    },
    {
        path: 'auth-success',
        component: FirebaseAuthComponent
    },
];
var FirebaseAuthRoutingModule = /** @class */ (function () {
    function FirebaseAuthRoutingModule() {
    }
    FirebaseAuthRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], FirebaseAuthRoutingModule);
    return FirebaseAuthRoutingModule;
}());
export { FirebaseAuthRoutingModule };
//# sourceMappingURL=firebase-auth.routes.js.map