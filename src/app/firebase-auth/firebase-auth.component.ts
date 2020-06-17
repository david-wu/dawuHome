import {
  Component,
  ElementRef,
} from '@angular/core';

declare global {
  interface Window {
    firebase: any;
    firebaseui: any;
  }
}

@Component({
  selector: 'dwu-firebase-auth',
  templateUrl: './firebase-auth.component.html',
  styleUrls: ['./firebase-auth.component.scss']
})
export class FirebaseAuthComponent {

  public ui: any;

  constructor(public hostEl: ElementRef) {}

  public ngOnInit() {
    const uiConfig = {
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // window.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // window.firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // window.firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // window.firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // window.firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = window.firebaseui.auth.AuthUI.getInstance()
      || new window.firebaseui.auth.AuthUI(window.firebase.auth());

    // The start method will wait until the DOM is loaded.
    const handle = this.ui.start(this.hostEl.nativeElement, uiConfig);
    console.log('handle', handle)
  }

  public ngOnDestroy() {
    this.ui.delete();
  }
}
