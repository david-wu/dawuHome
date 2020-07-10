import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import {
  FirebaseAuthService,
  FirebaseFirestoreService,
} from '@services/index';
import { User } from '@models/index';

declare global {
  interface Window {
    firebase: any;
    firebaseui: any;
  }
}

@Component({
  selector: 'dwu-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  @ViewChild('loginRef', { static: true }) loginRef: ElementRef;

  public ui: any;

  constructor(
    public hostEl: ElementRef,
    public firebaseAuthService: FirebaseAuthService,
    public firestoreService: FirebaseFirestoreService,
  ) {}

  public ngOnInit() {
    this.firebaseAuthService.renderLogin(this.loginRef.nativeElement);
    this.firebaseAuthService.user$.subscribe((user: User) => {
      console.log('user', user);
      if (user) {
        // const fireStore = window.firebase.firestore();
        // const userDoc = fireStore.doc(`users/${user.uid}`);
        // console.log('userDoc', `users/${user.uid}`, userDoc);

        this.firestoreService.updateUser(user);
        // userDoc.get().then((doc) => {
        //   if (doc && doc.exists) {
        //     const data = doc.data();
        //     console.log('data', data);
        //   } else {
        //     console.log('doc not found')
        //     userDoc.set({})
        //       .then((res) => {
        //         console.log('set response', res);
        //       })
        //   }
        // });
      }
    });
  }

  public ngOnDestroy() {
    // if (window.firebaseui.auth.AuthUI.getInstance()) {
    //   this.ui.delete();
    // }
  }

  public signOut() {
    this.firebaseAuthService.signOut();
  }
}
