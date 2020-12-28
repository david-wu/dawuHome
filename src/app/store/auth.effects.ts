import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Observable,
  from,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
  mergeMap,
  filter,
  tap
} from 'rxjs/operators';

import {
  FirebaseAuthService,
  FirebaseFirestoreService,
} from '@services/index';
import { User } from '@models/index';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {

  public renderLogin$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.renderLogin),
      switchMap(({ nativeEl }) => {
        return this.authService.renderLogin(nativeEl).pipe(
          switchMap((user: User) => {
            if (user) {
              return this.firestoreService.updateUser(user).pipe(
                map(() => AuthActions.loginSuccess({ user })),
              );
            }
            return of(AuthActions.loginSuccess({ user }))
          }),
        );
      }),
    );
  });

  public signOut$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signOut),
      switchMap(({ nativeEl }) => {
        return this.authService.signOut().pipe(
          mergeMap(() => {
            return [
              AuthActions.signOutSuccess(),
              AuthActions.renderLogin({ nativeEl }),
            ];
          }),
        );
      }),
    );
  });


  constructor(
    public actions$: Actions,
    public firestoreService: FirebaseFirestoreService,
    public authService: FirebaseAuthService,
  ) {}
}