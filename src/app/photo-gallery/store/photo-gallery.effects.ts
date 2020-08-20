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
} from 'rxjs';
import {
  map,
  switchMap,
  tap
} from 'rxjs/operators';

import { PhotoGalleryActions } from './photo-gallery.actions';
import { UserLocationService } from '@photo-gallery/services/index';
import { LocationData } from '@photo-gallery/models/index';

@Injectable()
export class PhotoGalleryEffects {

  public requestUserLocation$: Observable<Action> = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PhotoGalleryActions.requestUserLocation),
        switchMap(() => {
          console.log('getting user location')
          return from(this.userLocationService.getUserLocation()).pipe(
            map((locationData: LocationData) => {
              console.log('got user location', locationData)
              return PhotoGalleryActions.setUserLocation({ locationData: locationData })
            }),
          );
        }),
      );
    },
  );

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
    public actions$: Actions,
    public userLocationService: UserLocationService,
  ) {}
}