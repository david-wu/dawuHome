import { Injectable } from '@angular/core';
import {
  Router,
} from '@angular/router';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  Action,
  select,
} from '@ngrx/store';
import {
  FirebaseFirestoreService,
} from '@services/index';
import {
  from,
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

import { ImageStreamsService } from '@pp/image-streams/services';
import { ImageStreamsActions } from '@pp/image-streams/store/image-streams.actions';
import {
  getImageStreamsListVisible$,
  getImageStreamViewTab$,
} from '@pp/image-streams/store/image-streams.selectors';
import { PicturePiperService } from '@pp/services';
import {
  AuthActions,
  getUser$,
} from '@src/app/store/index';

@Injectable()
export class ImageStreamsEffects {

  public getImageStreams$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AuthActions.setUser,
        ImageStreamsActions.setImageStreamsListVisible,
      ),
      withLatestFrom(
        this.store$.pipe(select(getUser$)),
        this.store$.pipe(select(getImageStreamsListVisible$)),
      ),
      switchMap(([action, user, isVisible]) => {
        if (!isVisible || !user) {
          return of(ImageStreamsActions.setImageStreamsList({ payload: [] }));
        }
        return this.ppService.getImageStreams$(user).pipe(
          map((imageStreams) => ImageStreamsActions.setImageStreamsList({ payload: imageStreams })),
        );
      }),
    );
  });

  public createImageStream$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageStreamsActions.createImageStream),
      withLatestFrom(this.store$.pipe(select(getUser$))),
      switchMap(([action, user]) => {
        if (!user) {
          return of(ImageStreamsActions.createImageStreamFailure({ payload: 'no user' }));
        }
        return this.firestore.createImageStream(user).pipe(
          map((imageStream) => {
            return ImageStreamsActions.createImageStreamSuccess({ payload: 'imageStream' });
          }),
          catchError((err) => {
            return of(ImageStreamsActions.createImageStreamFailure({ payload: err }));
          })
        );
      }),
    );
  });


  public loadImagesByStreamId$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageStreamsActions.loadImagesByStreamId),
      withLatestFrom(this.store$.pipe(select(getUser$))),
      switchMap(([action, user]) => {
        const streamId = action.payload;
        if (!streamId || !user) {
          return of(ImageStreamsActions.addImagesByStreamId({ payload: {} }));
        }
        return this.firestore.getFilesForStream$(streamId).pipe(
          map((myUploads) => {
            return ImageStreamsActions.addImagesByStreamId({
              payload: {
                [streamId]: myUploads,
              },
            });
          })
        );
      }),
    );
  });

  public uploadImageStreamFile$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageStreamsActions.uploadImageStreamFile),
      withLatestFrom(this.store$.pipe(select(getUser$))),
      switchMap(([action, user]) => {
        const streamId = action.selectedImageStreamId;
        const file = action.file;
        if (!streamId || !user) {
          return of(ImageStreamsActions.uploadImageStreamFileFailure({ payload: 'no user or stream' }));
        }
        return from(this.imageStreamsService.uploadImageStreamFile(file, user, streamId)).pipe(
          map((uploadedImage) => {
            return ImageStreamsActions.uploadImageStreamFileSuccess({
              selectedImageStreamId: streamId,
            });
          })
        );
      }),
    );
  });

  public deleteUpload$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageStreamsActions.deleteUpload),
      switchMap((action) => {
        const uploadId = action.payload;
        if (!uploadId) {
          return of(ImageStreamsActions.deleteUploadFailure({ payload: 'no uploadId' }));
        }
        return from(this.imageStreamsService.deleteFile(uploadId)).pipe(
          map((uploadedImage) => ImageStreamsActions.deleteUploadSuccess({ payload: uploadId })),
        );
      }),
    );
  });

  public navigateToImageStreamView$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageStreamsActions.navigateToImageStreamView),
      withLatestFrom(this.store$.pipe(select(getImageStreamViewTab$))),
      map(([action, viewTab]) => {
        return this.router.navigate([
          action.payload,
          ...(viewTab ? [viewTab] : []),
        ]);
      }),
    );
  }, { dispatch: false });

  public updateImageStream$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageStreamsActions.updateImageStream),
      switchMap((action) => {
        const { imageStreamId, patch } = action;
        return from(this.imageStreamsService.updateImageStream(imageStreamId, patch)).pipe(
          map((uploadedImage) => ImageStreamsActions.updateImageStreamSuccess({ imageStreamId, patch })),
        );
      }),
    );
  });

  // public generateImageStreamToken$: Observable<any> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageStreamsActions.generateImageStreamToken),
  //     switchMap((action) => {
  //       const imageStreamId = action.payload;
  //       return from(this.imageStreamsService.generateImageStreamToken(imageStreamId)).pipe(
  //         map(() => ImageStreamsActions.generateImageStreamTokenSuccess({ payload: imageStreamId })),
  //         catchError(() => of(ImageStreamsActions.generateImageStreamTokenFailure({ payload: imageStreamId }))),
  //       );
  //     }),
  //   );
  // });

  // public loadImageStreamTokens$: Observable<any> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageStreamsActions.loadImageStreamTokens),
  //     switchMap((action) => {
  //       const imageStreamId = action.imageStreamId;
  //       return from(this.imageStreamsService.loadImageStreamTokens(imageStreamId)).pipe(
  //         map((imageStreamTokens: any[]) => ImageStreamsActions.loadImageStreamTokensSuccess({ imageStreamId, imageStreamTokens })),
  //       );
  //     }),
  //   );
  // });

  constructor(
    public store$: Store,
    public actions$: Actions,
    public firestore: FirebaseFirestoreService,
    public imageStreamsService: ImageStreamsService,
    public router: Router,
    public ppService: PicturePiperService,
  ) {}
}
