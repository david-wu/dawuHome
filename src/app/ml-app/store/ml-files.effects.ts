import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import {
  of,
  Observable,
  from,
} from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  filter,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

import {
  getUser$
} from '@app/store';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
} from '@services/index';

import { MlFilesActions } from './ml-files.actions';
import {
  User,
} from '@models/index';
import { File } from '@file-explorer/models/index';

// import { UserLocationService } from '@photo-gallery/services/index';
// import { LocationData } from '@photo-gallery/models/index';

@Injectable()
export class MlFilesEffects {

  public getUserFiles$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(MlFilesActions.getUserFiles),
      switchMap(() => {
        return this.store$.pipe(
          select(getUser$),
          filter(Boolean),
          switchMap((user: User) => {
            const filesRef = this.firestoreService.firestore.collection(`users/${user.uid}/files`);
            return from(filesRef.get()).pipe(
              map((fileRefs: any) => {
                const files = fileRefs.docs.map((fileRef) => {
                  return Object.assign(new File(), {
                    ...fileRef.data(),
                    id: fileRef.id,
                  });
                });
                return MlFilesActions.getUserFilesSuccess({
                  files: files
                });
              }),
              catchError((error: any) => of(MlFilesActions.getUserFilesFailure({ error }))),
            )
          })
        )
      }),
    );
  });

  public createUserFiles$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(MlFilesActions.createUserFiles),
      switchMap((action: any) => {
        const files: File[] = action.files;

        return this.store$.pipe(
          select(getUser$),
          filter(Boolean),
          switchMap((user: User) => {
            const fs = this.firestoreService.firestore;
            const batch = fs.batch();
            const filesRef = fs.collection(`users/${user.uid}/files`);

            files.forEach((file: File) => {
              filesRef.doc(file.id).set({
                ...file
              });
            });
            const commitP = batch.commit();
            // commitP.then((d) => {
            //   console.log('committed', d);
            // });

            return from(commitP).pipe(
              map((fileRefs: any) => {
                return MlFilesActions.createUserFilesSuccess({
                  files: files
                });
              }),
              catchError((error: any) => of(MlFilesActions.createUserFilesFailure({ error }))),
            )
          })
        )
      }),
    );
  });


  //       // get auth user from parent store

  //       // const userDoc = this.firestore.doc(`users/${user.uid}/uploads/${fileId}`);
  //       // await userDoc.delete();
  //       // const uploadDoc = this.firestore.doc(`uploads/${fileId}`);
  //       // return await uploadDoc.delete();


  // public requestUserLocation$: Observable<Action> = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(MlFilesActions.requestUserLocation),
  //       switchMap(() => {
  //         console.log('getting user location')
  //         return from(this.userLocationService.getUserLocation()).pipe(
  //           map((locationData: LocationData) => {
  //             console.log('got user location', locationData)
  //             return MlFilesActions.setUserLocation({ locationData: locationData })
  //           }),
  //         );
  //       }),
  //     );
  //   },
  // );

  // public checkUserLocationPermission$: Observable<Action> = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(MlFilesActions.checkUserLocationPermission),
  //       switchMap(() => {
  //         return from(this.userLocationService.getIsPermissionGranted()).pipe(
  //           map((permission) => MlFilesActions.setUserLocationPermission({ locationPermission: permission }))
  //         );
  //       }),
  //     );
  //   }
  // )

  constructor(
    public store$: Store,
    public actions$: Actions,
    public firestoreService: FirebaseFirestoreService,
    public auth: FirebaseAuthService,
    public storage: FirebaseStorageService,
    // public userLocationService: UserLocationService,
  ) {}
}