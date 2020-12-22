import {
  createAction,
  props,
} from '@ngrx/store';
import { LocationData } from '@photo-gallery/models/index';

export class PhotoGalleryActions {
  public static readonly CATEGORY = '[PHOTO_GALLERY]';

  public static requestUserLocation = createAction(
    `${PhotoGalleryActions.CATEGORY} REQUEST_USER_LOCATION`,
  );

  public static setNearbyLocationsRequired = createAction(
    `${PhotoGalleryActions.CATEGORY} SET_NEARBY_LOCATIONS_REQUIRED`,
    props<{ payload: boolean }>(),
  );

  public static setUserLocation = createAction(
    `${PhotoGalleryActions.CATEGORY} SET_USER_LOCATION`,
    props<{ payload: LocationData }>(),
  );

  public static checkUserLocationPermission = createAction(
    `${PhotoGalleryActions.CATEGORY} CHECK_USER_LOCATION_PERMISSION`,
  );

  public static setUserLocationPermission = createAction(
    `${PhotoGalleryActions.CATEGORY} SET_USER_LOCATION_PERMISSION`,
    props<{ locationPermission: any }>(),
  );

}