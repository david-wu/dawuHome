import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@models/index';
var FirebaseAuthService = /** @class */ (function () {
    function FirebaseAuthService() {
        this.firebaseAuth = window.firebase.auth();
        this.FirebaseAuthUI = window.firebaseui.auth.AuthUI;
        this.defaultUiConfig = {
            signInSuccessUrl: '#/auth-success',
            callbacks: {
                signInSuccess: function () { return false; },
            },
            signInOptions: [
                window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                // window.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // window.firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                window.firebase.auth.GithubAuthProvider.PROVIDER_ID,
            ],
        };
        this.user$ = new BehaviorSubject(undefined);
        this.initialize();
        this.authLoading$ = this.user$.pipe(map(function (user) { return user === undefined; }));
        this.canLogin$ = this.user$.pipe(map(function (user) { return user === null; }));
    }
    FirebaseAuthService.prototype.initialize = function () {
        var _this = this;
        this.firebaseAuthUI = window.firebaseui.auth.AuthUI.getInstance() || new this.FirebaseAuthUI(this.firebaseAuth);
        this.firebaseAuth.onAuthStateChanged(function (userData) {
            if (userData === null) {
                _this.user$.next(null);
                return;
            }
            var user = Object.assign(new User(), {
                uid: userData.uid,
                displayName: userData.displayName,
                email: userData.email,
                emailVerified: userData.emailVerified,
                photoURL: userData.photoURL,
            });
            _this.user$.next(user);
        });
    };
    FirebaseAuthService.prototype.renderLogin = function (hostEl) {
        this.firebaseAuthUI.start(hostEl, __assign({}, this.defaultUiConfig));
    };
    FirebaseAuthService.prototype.signOut = function () {
        return this.firebaseAuth.signOut();
    };
    FirebaseAuthService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FirebaseAuthService);
    return FirebaseAuthService;
}());
export { FirebaseAuthService };
//# sourceMappingURL=firebase-auth.service.js.map