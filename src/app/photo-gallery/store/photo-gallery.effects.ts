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
} from 'rxjs';
import {
  map,
  switchMap,
  withLatestFrom,
  tap,
} from 'rxjs/operators';

import { PhotoGalleryActions } from './photo-gallery.actions';
import { getUserLocation$ } from './photo-gallery.selectors';
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
        // PhotoGalleryActions.setNearbyLocationsRequired,
      ),
      withLatestFrom(
        this.store$.pipe(select(getUserLocation$)),
      ),
      map(([action, userLocation]) => {
        return PhotoGalleryActions.setNearbyLocationsRequired({ payload: true });
      })
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
  ) {}
}