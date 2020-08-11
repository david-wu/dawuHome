import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserLoginRoutingModule } from '@app/user-login/user-login.routes';
import { UserLoginComponent } from '@app/user-login/user-login.component';
import { UserLoginSuccessComponent } from '@app/user-login/user-login-success/user-login-success.component';
import { FirebaseAuthService, FirebaseFirestoreService, } from '@services/index';
var UserLoginModule = /** @class */ (function () {
    function UserLoginModule() {
    }
    UserLoginModule = __decorate([
        NgModule({
            declarations: [
                UserLoginComponent,
                UserLoginSuccessComponent,
            ],
            imports: [
                CommonModule,
                UserLoginRoutingModule,
            ],
            exports: [
                UserLoginComponent,
                UserLoginSuccessComponent,
            ],
            providers: [
                FirebaseAuthService,
                FirebaseFirestoreService,
            ],
        })
    ], UserLoginModule);
    return UserLoginModule;
}());
export { UserLoginModule };
//# sourceMappingURL=user-login.module.js.map