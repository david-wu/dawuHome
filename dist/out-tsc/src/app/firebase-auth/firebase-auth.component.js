import { __decorate } from "tslib";
import { Component, } from '@angular/core';
var FirebaseAuthComponent = /** @class */ (function () {
    function FirebaseAuthComponent(hostEl) {
        this.hostEl = hostEl;
    }
    FirebaseAuthComponent.prototype.ngOnInit = function () {
        var uiConfig = {
            signInSuccessUrl: '#/auth-success',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            // tosUrl and privacyPolicyUrl accept either url string or a callback
            // function.
            // Terms of service url/callback.
            tosUrl: '<your-tos-url>',
            // Privacy policy url/callback.
            privacyPolicyUrl: function () {
                window.location.assign('<your-privacy-policy-url>');
            }
        };
        // Initialize the FirebaseUI Widget using Firebase.
        this.ui = window.firebaseui.auth.AuthUI.getInstance()
            || new window.firebaseui.auth.AuthUI(window.firebase.auth());
        // The start method will wait until the DOM is loaded.
        var handle = this.ui.start(this.hostEl.nativeElement, uiConfig);
        console.log('handle', handle);
        window.firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                user.getIdToken().then(function (accessToken) {
                    var data = JSON.stringify({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                        providerData: providerData
                    }, null, '  ');
                    console.log('data', data);
                });
            }
            else {
                console.log('signed out');
                // // User is signed out.
                // document.getElementById('sign-in-status').textContent = 'Signed out';
                // document.getElementById('sign-in').textContent = 'Sign in';
                // document.getElementById('account-details').textContent = 'null';
            }
        }, function (error) {
            console.log(error);
        });
    };
    FirebaseAuthComponent.prototype.ngOnDestroy = function () {
        if (window.firebaseui.auth.AuthUI.getInstance()) {
            this.ui.delete();
        }
    };
    FirebaseAuthComponent = __decorate([
        Component({
            selector: 'dwu-firebase-auth',
            templateUrl: './firebase-auth.component.html',
            styleUrls: ['./firebase-auth.component.scss']
        })
    ], FirebaseAuthComponent);
    return FirebaseAuthComponent;
}());
export { FirebaseAuthComponent };
//# sourceMappingURL=firebase-auth.component.js.map