import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Router,
} from '@angular/router';
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
  getImageSourceViewTab$,
} from './image-sources.selectors';
import { ImageSourcesActions } from './image-sources.actions';
import { ImageSourcesService } from '@src/app/image-sources/services';

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
          map((imageSources) => ImageSourcesActions.setImageSourcesList({ payload: imageSources })),
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


  public loadImagesBySourceId$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageSourcesActions.loadImagesBySourceId),
      withLatestFrom(this.store$.pipe(select(getUser$))),
      switchMap(([action, user]) => {
        const sourceId = action.payload;
        if (!sourceId || !user) {
          return of(ImageSourcesActions.addImagesBySourceId({ payload: {} }));
        }
        return this.firestore.getFilesForSource$(sourceId).pipe(
          map((myUploads) => {
            return ImageSourcesActions.addImagesBySourceId({
              payload: {
                [sourceId]: myUploads,
              },
            });
          })
        );
      }),
    )
  });

  public uploadImageSourceFile$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageSourcesActions.uploadImageSourceFile),
      withLatestFrom(this.store$.pipe(select(getUser$))),
      switchMap(([action, user]) => {
        const sourceId = action.selectedImageSourceId;
        const file = action.file;
        if (!sourceId || !user) {
          return of(ImageSourcesActions.uploadImageSourceFileFailure({ payload: 'no user or source' }));
        }
        return from(this.imageSourcesService.uploadImageSourceFile(file, user, sourceId)).pipe(
          map((uploadedImage) => {
            return ImageSourcesActions.uploadImageSourceFileSuccess({
              selectedImageSourceId: sourceId,
            });
          })
        );
      }),
    );
  });

  public deleteUpload$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageSourcesActions.deleteUpload),
      switchMap((action) => {
        const uploadId = action.payload;
        if (!uploadId) {
          return of(ImageSourcesActions.deleteUploadFailure({ payload: 'no uploadId' }));
        }
        return from(this.imageSourcesService.deleteFile(uploadId)).pipe(
          map((uploadedImage) => ImageSourcesActions.deleteUploadSuccess({ payload: uploadId })),
        );
      }),
    );
  });


  public navigateToImageSourceView$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageSourcesActions.navigateToImageSourceView),
      withLatestFrom(this.store$.pipe(select(getImageSourceViewTab$))),
      map(([action, viewTab]) => this.router.navigate([action.payload, viewTab])),
    );
  }, { dispatch: false });

  constructor(
    public store$: Store,
    public actions$: Actions,
    public firestore: FirebaseFirestoreService,
    public imageSourcesService: ImageSourcesService,
    public router: Router,
  ) {}
}