import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';

import { PhotoGalleryActions } from './photo-gallery.actions';
import {
  initialPhotoGalleryState,
  PhotoGalleryState,
} from './photo-gallery.state';

const reducer: ActionReducer<PhotoGalleryState> = createReducer(
  initialPhotoGalleryState,
  on(PhotoGalleryActions.requestUserLocation, (state: PhotoGalleryState, action: PhotoGalleryActions) => {
    return {
      ...state,
      userLocation: undefined,
    };
  }),

  on(PhotoGalleryActions.setNearbyLocationsRequired, (state: PhotoGalleryState, action: any) => {
    return {
      ...state,
      nearbyLocationsRequired: action.payload,
    };
  }),

  on(PhotoGalleryActions.setUserLocation, (state: PhotoGalleryState, action: any) => {
    return {
      ...state,
      userLocation: action.payload,
    };
  }),

  on(PhotoGalleryActions.setUserLocationPermission, (state: PhotoGalleryState, action: any) => {
    return {
      ...state,
      locationPermission: action.locationPermission,
    };
  }),
);

export function photoGalleryReducer(state: PhotoGalleryState, action: Action): PhotoGalleryState {
  return reducer(state, action);
}
