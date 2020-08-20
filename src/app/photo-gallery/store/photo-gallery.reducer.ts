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
    console.log('PhotoGalleryState state', state)
    return {
      ...state,
      userLocation: undefined,
    };
  }),
  on(PhotoGalleryActions.setUserLocation, (state: PhotoGalleryState, action: any) => {
    console.log('setUserLocation action', action, state)
    return {
      ...state,
      userLocation: action.userLocation,
    };
  }),
  on(PhotoGalleryActions.setUserLocationPermission, (state: PhotoGalleryState, action: any) => {
    console.log('action, setUserLocationPermission', action)
    return {
      ...state,
      locationPermission: action.locationPermission,
    };
  }),
);

export function photoGalleryReducer(state: PhotoGalleryState, action: Action): PhotoGalleryState {
  return reducer(state, action);
}

// interface PhotoGalleryState  {

// }

// export const photoGalleryReducerMap: ActionReducerMap<PhotoGalleryState> = {
//   photoGalleryState: '',
// };
