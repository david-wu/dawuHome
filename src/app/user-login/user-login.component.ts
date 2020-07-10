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
      if (user) {
        this.firestoreService.updateUser(user);
      }
    });
  }

  public signOut() {
    this.firebaseAuthService.signOut();
  }
}
