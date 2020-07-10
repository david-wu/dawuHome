import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
} from 'rxjs';

import { User } from '@firebase-auth/user.model';

@Injectable()
export class FirebaseAuthService {

  public firebaseAuth = window.firebase.auth();
  public FirebaseAuthUI = window.firebaseui.auth.AuthUI;
  public firebaseAuthUI: any;

  public defaultUiConfig = {
    // signInSuccessUrl: '#/auth-success',
    signInSuccessUrl: '#/auth-success',
    callbacks: {
      signInSuccess: () => false,
    },
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
    // tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    // privacyPolicyUrl: function() {
    //   window.location.assign('<your-privacy-policy-url>');
    // },
  };
  public user$ = new BehaviorSubject<User>(undefined);
  public initializing$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.initialize();
  }

  public initialize() {
    if (!this.firebaseAuthUI) {
      this.firebaseAuthUI = new this.FirebaseAuthUI(this.firebaseAuth);
    }
    this.firebaseAuth.onAuthStateChanged((userData) => {
      // this.initializing$.next(false);
      if (!userData) {
        return;
      }
      userData.getIdToken().then((accessToken: string) => {
        const user = Object.assign(
          new User(),
          userData,
          { accessToken },
        );
        this.user$.next(user);
      });
    })
  }

  public renderLogin(hostEl: HTMLElement) {
    this.firebaseAuthUI.start(hostEl, {
      ...this.defaultUiConfig,
    });
  }

  public signOut() {
    return this.firebaseAuth.signOut()
      .then(() => {
        this.user$.next(undefined);
      })
  }

}