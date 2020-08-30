import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';

import {
  AuthActions,
  getUser$,
  getAuthLoading$,
  getCanLogin$,
} from '@app/store/index';
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

  public user$: Observable<User>;
  public authLoading$: Observable<boolean>;
  public canLogin$: Observable<boolean>;

  constructor(
    public store: Store<any>,
    public hostEl: ElementRef,
  ) {
    this.user$ = this.store.pipe(select(getUser$));
    this.authLoading$ = this.store.pipe(select(getAuthLoading$));
    this.canLogin$ = this.store.pipe(select(getCanLogin$));
  }

  public ngOnInit() {
    this.store.dispatch(AuthActions.renderLogin({
      nativeEl: this.loginRef.nativeElement
    }));
  }

  public signOut() {
    this.store.dispatch(AuthActions.signOut({
      nativeEl: this.loginRef.nativeElement,
    }));
  }
}
