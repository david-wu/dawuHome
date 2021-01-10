import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  from,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@models/index';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {

  public firebaseAuth = window.firebase.auth();
  public FirebaseAuthUI = window.firebaseui.auth.AuthUI;
  // public firebaseAuthUI: any;

  public defaultUiConfig = {
    signInSuccessUrl: '#/auth-success',
    callbacks: {
      signInSuccess: () => false,
    },
    signInOptions: [
      window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // window.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // window.firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      window.firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // window.firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // window.firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // Terms of service and privacy url/callback.
    // tosUrl: '<your-tos-url>',
    // privacyPolicyUrl: function() {
    //   window.location.assign('<your-privacy-policy-url>');
    // },
  };
  public user$ = new BehaviorSubject<User>(undefined);
  public authLoading$: Observable<boolean>;
  public canLogin$: Observable<boolean>;

  constructor() {
    // this.initialize();
    this.authLoading$ = this.user$.pipe(
      map((user: User) => user === undefined),
    );
    this.canLogin$ = this.user$.pipe(
      map((user: User) => user === null),
    );
  }

  // public initialize() {
  //   // this.firebaseAuthUI = window.firebaseui.auth.AuthUI.getInstance() || new this.FirebaseAuthUI(this.firebaseAuth);
  //   this.firebaseAuth.onAuthStateChanged((userData) => {
  //     if (userData === null) {
  //       this.user$.next(null);
  //       return;
  //     }
  //     const user = Object.assign(new User(), {
  //       uid: userData.uid,
  //       displayName: userData.displayName,
  //       email: userData.email,
  //       emailVerified: userData.emailVerified,
  //       photoURL: userData.photoURL,
  //     });
  //     this.user$.next(user);
  //   });
  //   return this.user$;
  // }

  public getUser$(): Observable<User> {
    // this.firebaseAuthUI = window.firebaseui.auth.AuthUI.getInstance() || new this.FirebaseAuthUI(this.firebaseAuth);
    this.firebaseAuth.onAuthStateChanged((userData) => {
      if (userData === null) {
        this.user$.next(null);
        return;
      }
      const user = Object.assign(new User(), {
        uid: userData.uid,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
        photoURL: userData.photoURL,
      });
      this.user$.next(user);
    });
    return this.user$;
  }

  public renderLogin(hostEl: HTMLElement): Observable<User> {
    const firebaseAuthUI = window.firebaseui.auth.AuthUI.getInstance() || new this.FirebaseAuthUI(this.firebaseAuth);
    firebaseAuthUI.start(hostEl, {
      ...this.defaultUiConfig,
    });
    return this.user$.asObservable();
  }

  public signOut(): Observable<any> {
    return from(this.firebaseAuth.signOut());
  }

}
