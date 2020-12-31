import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  Action,
  select,
} from '@ngrx/store';
import {
  Observable,
  from,
  of,
} from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import {
  FirebaseFirestoreService,
} from '@services/index';
import {
  sortBy,
  orderBy,
} from 'lodash';

import {
  AuthActions,
  getUser$,
} from '@src/app/store/index';
import {
  getImageSourcesListVisible$,
} from './image-sources.selectors';
import { ImageSourcesActions } from './image-sources.actions';

@Injectable()
export class ImageSourcesEffects {

  public getImageSources$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AuthActions.setUser,
        ImageSourcesActions.setImageSourcesListVisible,
      ),
      withLatestFrom(
        this.store$.pipe(select(getUser$)),
        this.store$.pipe(select(getImageSourcesListVisible$)),
      ),
      switchMap(([action, user, isVisible]) => {
        if (!isVisible || !user) {
          return of(ImageSourcesActions.setImageSourcesList({ payload: [] }));
        }
        return this.firestore.getImageSources$(user).pipe(
          map((imageSources) => {
            return ImageSourcesActions.setImageSourcesList({ payload: imageSources });
          })
        );
      }),
    )
  });

  public createImageSource$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageSourcesActions.createImageSource),
      withLatestFrom(this.store$.pipe(select(getUser$))),
      switchMap(([action, user]) => {
        if (!user) {
          return of(ImageSourcesActions.createImageSourceFailure({ payload: 'no user' }));
        }
        return this.firestore.createImageSource(user).pipe(
          map((imageSource) => {
            return ImageSourcesActions.createImageSourceSuccess({ payload: 'imageSource' });
          }),
          catchError((err) => {
            return of(ImageSourcesActions.createImageSourceFailure({ payload: err }));
          })
        );
      }),
    )
  });

  constructor(
    public store$: Store,
    public actions$: Actions,
    public firestore: FirebaseFirestoreService,
  ) {}
}