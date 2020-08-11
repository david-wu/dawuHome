import { __decorate } from "tslib";
import { Component, ViewChild, } from '@angular/core';
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(hostEl, firebaseAuthService, firestoreService) {
        this.hostEl = hostEl;
        this.firebaseAuthService = firebaseAuthService;
        this.firestoreService = firestoreService;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseAuthService.renderLogin(this.loginRef.nativeElement);
        this.firebaseAuthService.user$.subscribe(function (user) {
            if (user) {
                _this.firestoreService.updateUser(user);
            }
        });
    };
    UserLoginComponent.prototype.signOut = function () {
        this.firebaseAuthService.signOut();
        this.firebaseAuthService.renderLogin(this.loginRef.nativeElement);
    };
    __decorate([
        ViewChild('loginRef', { static: true })
    ], UserLoginComponent.prototype, "loginRef", void 0);
    UserLoginComponent = __decorate([
        Component({
            selector: 'dwu-user-login',
            templateUrl: './user-login.component.html',
            styleUrls: ['./user-login.component.scss']
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map