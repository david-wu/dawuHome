import { __decorate } from "tslib";
import { Component, } from '@angular/core';
// declare global {
//   interface Window {
//     firebase: any;
//     firebaseui: any;
//   }
// }
var UserLoginSuccessComponent = /** @class */ (function () {
    function UserLoginSuccessComponent(route) {
        this.route = route;
    }
    UserLoginSuccessComponent.prototype.ngOnInit = function () {
        console.log('route', this.route);
    };
    UserLoginSuccessComponent = __decorate([
        Component({
            selector: 'dwu-user-login-success',
            templateUrl: './user-login-success.component.html',
            styleUrls: ['./user-login-success.component.scss']
        })
    ], UserLoginSuccessComponent);
    return UserLoginSuccessComponent;
}());
export { UserLoginSuccessComponent };
//# sourceMappingURL=user-login-success.component.js.map