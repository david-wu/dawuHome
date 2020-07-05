import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirebaseAuthRoutingModule } from '@src/app/firebase-auth/firebase-auth.routes';
import { FirebaseAuthComponent } from '@src/app/firebase-auth/firebase-auth.component';
import { FirebaseAuthSuccessComponent } from '@src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component';
var FirebaseAuthModule = /** @class */ (function () {
    function FirebaseAuthModule() {
    }
    FirebaseAuthModule = __decorate([
        NgModule({
            declarations: [
                FirebaseAuthComponent,
                FirebaseAuthSuccessComponent,
            ],
            imports: [
                CommonModule,
            ],
            exports: [
                FirebaseAuthComponent,
                FirebaseAuthSuccessComponent,
            ],
            providers: [],
        })
    ], FirebaseAuthModule);
    return FirebaseAuthModule;
}());
export { FirebaseAuthModule };
var FirebaseAuthWithRoutesModule = /** @class */ (function () {
    function FirebaseAuthWithRoutesModule() {
    }
    FirebaseAuthWithRoutesModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                FirebaseAuthModule,
                FirebaseAuthRoutingModule,
            ],
            exports: [],
            providers: [],
        })
    ], FirebaseAuthWithRoutesModule);
    return FirebaseAuthWithRoutesModule;
}());
export { FirebaseAuthWithRoutesModule };
//# sourceMappingURL=firebase-auth.module.js.map