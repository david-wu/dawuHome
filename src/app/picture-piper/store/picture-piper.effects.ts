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
// import {
//   getImageSourcesListVisible$,
//   getImageSourceViewTab$,
//   getSelectedImageSourceId$,
// } from './image-sources.selectors';
import { getVisibleResourceListCounts$ } from './picture-piper.selectors';
import { PicturePiperActions } from './picture-piper.actions';
// import { ImageSourcesService } from '@pp/image-sources/services';
import { PicturePiperService } from '@pp/services';

@Injectable()
export class PicturePiperEffects {

  // public getImageSources$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(
  //       AuthActions.setUser,
  //       ImageSourcesActions.setImageSourcesListVisible,
  //     ),
  //     withLatestFrom(
  //       this.store$.pipe(select(getUser$)),
  //       this.store$.pipe(select(getImageSourcesListVisible$)),
  //     ),
  //     switchMap(([action, user, isVisible]) => {
  //       if (!isVisible || !user) {
  //         return of(ImageSourcesActions.setImageSourcesList({ payload: [] }));
  //       }
  //       return this.ppService.getImageSources$(user).pipe(
  //         map((imageSources) => ImageSourcesActions.setImageSourcesList({ payload: imageSources })),
  //       );
  //     }),
  //   )
  // });

  // public createImageSource$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.createImageSource),
  //     withLatestFrom(this.store$.pipe(select(getUser$))),
  //     switchMap(([action, user]) => {
  //       if (!user) {
  //         return of(ImageSourcesActions.createImageSourceFailure({ payload: 'no user' }));
  //       }
  //       return this.firestore.createImageSource(user).pipe(
  //         map((imageSource) => {
  //           return ImageSourcesActions.createImageSourceSuccess({ payload: 'imageSource' });
  //         }),
  //         catchError((err) => {
  //           return of(ImageSourcesActions.createImageSourceFailure({ payload: err }));
  //         })
  //       );
  //     }),
  //   )
  // });


  public addVisibleResourceList$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(PicturePiperActions.addVisibleResourceList),
      withLatestFrom(
        this.store$.pipe(select(getUser$)),
        this.store$.pipe(select(getVisibleResourceListCounts$)),
      ),
      switchMap(([action, user, visibleResourceListCounts]) => {
        const resource = action.resource;
        const visibleResourceListCount = visibleResourceListCounts[resource.path];

        if (visibleResourceListCount === 1) {
          return this.ppService.getResourceList$(user, resource).pipe(
            map((list) => {
              return PicturePiperActions.setResourceList({
                resource,
                list,
              });
            })
          );
        }

        return of(PicturePiperActions.setResourceList({
          resource: 'null',
          list: [],
        }));
      }),
    )
  });

  // public uploadImageSourceFile$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.uploadImageSourceFile),
  //     withLatestFrom(this.store$.pipe(select(getUser$))),
  //     switchMap(([action, user]) => {
  //       const sourceId = action.selectedImageSourceId;
  //       const file = action.file;
  //       if (!sourceId || !user) {
  //         return of(ImageSourcesActions.uploadImageSourceFileFailure({ payload: 'no user or source' }));
  //       }
  //       return from(this.imageSourcesService.uploadImageSourceFile(file, user, sourceId)).pipe(
  //         map((uploadedImage) => {
  //           return ImageSourcesActions.uploadImageSourceFileSuccess({
  //             selectedImageSourceId: sourceId,
  //           });
  //         })
  //       );
  //     }),
  //   );
  // });

  // public deleteUpload$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.deleteUpload),
  //     switchMap((action) => {
  //       const uploadId = action.payload;
  //       if (!uploadId) {
  //         return of(ImageSourcesActions.deleteUploadFailure({ payload: 'no uploadId' }));
  //       }
  //       return from(this.imageSourcesService.deleteFile(uploadId)).pipe(
  //         map((uploadedImage) => ImageSourcesActions.deleteUploadSuccess({ payload: uploadId })),
  //       );
  //     }),
  //   );
  // });

  // public navigateToImageSourceView$: Observable<any> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.navigateToImageSourceView),
  //     withLatestFrom(this.store$.pipe(select(getImageSourceViewTab$))),
  //     map(([action, viewTab]) => {
  //       return this.router.navigate([
  //         action.payload,
  //         ...(viewTab ? [viewTab] : []),
  //       ]);
  //     }),
  //   );
  // }, { dispatch: false });

  // public updateImageSource$: Observable<any> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.updateImageSource),
  //     switchMap((action) => {
  //       const { imageSourceId, patch } = action;
  //       return from(this.imageSourcesService.updateImageSource(imageSourceId, patch)).pipe(
  //         map((uploadedImage) => ImageSourcesActions.updateImageSourceSuccess({ imageSourceId, patch })),
  //       );
  //     }),
  //   );
  // });

  // public generateImageSourceToken$: Observable<any> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.generateImageSourceToken),
  //     switchMap((action) => {
  //       const imageSourceId = action.payload;
  //       return from(this.imageSourcesService.generateImageSourceToken(imageSourceId)).pipe(
  //         map(() => ImageSourcesActions.generateImageSourceTokenSuccess({ payload: imageSourceId })),
  //         catchError(() => of(ImageSourcesActions.generateImageSourceTokenFailure({ payload: imageSourceId }))),
  //       );
  //     }),
  //   );
  // });

  // public loadImageSourceTokens$: Observable<any> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ImageSourcesActions.loadImageSourceTokens),
  //     switchMap((action) => {
  //       const imageSourceId = action.imageSourceId;
  //       return from(this.imageSourcesService.loadImageSourceTokens(imageSourceId)).pipe(
  //         map((imageSourceTokens: any[]) => ImageSourcesActions.loadImageSourceTokensSuccess({ imageSourceId, imageSourceTokens })),
  //       );
  //     }),
  //   );
  // });

  constructor(
    public store$: Store,
    public actions$: Actions,
    public firestore: FirebaseFirestoreService,
    // public imageSourcesService: ImageSourcesService,
    public router: Router,
    public ppService: PicturePiperService,
  ) {}
}