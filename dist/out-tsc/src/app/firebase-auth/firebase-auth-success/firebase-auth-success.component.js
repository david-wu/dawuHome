import { __decorate } from "tslib";
import { Component, } from '@angular/core';
// declare global {
//   interface Window {
//     firebase: any;
//     firebaseui: any;
//   }
// }
var FirebaseAuthSuccessComponent = /** @class */ (function () {
    function FirebaseAuthSuccessComponent(route) {
        this.route = route;
    }
    FirebaseAuthSuccessComponent.prototype.ngOnInit = function () {
        console.log('route', this.route);
    };
    FirebaseAuthSuccessComponent = __decorate([
        Component({
            selector: 'dwu-firebase-auth-success',
            templateUrl: './firebase-auth-success.component.html',
            styleUrls: ['./firebase-auth-success.component.scss']
        })
    ], FirebaseAuthSuccessComponent);
    return FirebaseAuthSuccessComponent;
}());
export { FirebaseAuthSuccessComponent };
//# sourceMappingURL=firebase-auth-success.component.js.map