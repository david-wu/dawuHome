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
  switchMap,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import {
  // FirebaseAuthService,
  FirebaseFirestoreService,
  // FirebaseStorageService,
} from '@services/index';
import { sortBy } from 'lodash';

import { PhotoGalleryActions } from './photo-gallery.actions';
import {
  getUserLocation$,
  getNearbyImagesVisible$,
} from './photo-gallery.selectors';
import { UserLocationService } from '@photo-gallery/services/index';
import { LocationData } from '@photo-gallery/models/index';

@Injectable()
export class PhotoGalleryEffects {

  public requestUserLocation$: Observable<Action> = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PhotoGalleryActions.requestUserLocation),
        switchMap(() => {
          return from(this.userLocationService.getUserLocation()).pipe(
            map((locationData: LocationData) => {
              return PhotoGalleryActions.setUserLocation({ payload: locationData })
            }),
          );
        }),
      );
    },
  );

  public loadNearbyLocation$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        PhotoGalleryActions.setUserLocation,
        PhotoGalleryActions.setNearbyImagesVisible,
      ),
      withLatestFrom(
        this.store$.pipe(select(getUserLocation$)),
        this.store$.pipe(select(getNearbyImagesVisible$)),
      ),
      switchMap(([action, userLocation, nearbyImagesVisible]) => {
        if (!nearbyImagesVisible || !userLocation) {
          return of(PhotoGalleryActions.setNearbyImages({ payload: undefined }));
        }
        return this.firestore.getNearbyUploads$(userLocation).pipe(
          map((nearbyUploads: any[]) => {
            const sortedUploads =  sortBy(nearbyUploads, (upload) => {
              return Math.pow(userLocation.latitude - upload.locationData.latitude, 2) + Math.pow(userLocation.longitude - upload.locationData.longitude, 2);
            });
            return PhotoGalleryActions.setNearbyImages({ payload: sortedUploads });
          }),
        );
      }),
    )
  });

  public checkUserLocationPermission$: Observable<Action> = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PhotoGalleryActions.checkUserLocationPermission),
        switchMap(() => {
          return from(this.userLocationService.getIsPermissionGranted()).pipe(
            map((permission) => PhotoGalleryActions.setUserLocationPermission({ locationPermission: permission }))
          );
        }),
      );
    }
  )

  constructor(
    public store$: Store,
    public actions$: Actions,
    public userLocationService: UserLocationService,
    public firestore: FirebaseFirestoreService,
  ) {}
}