import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { PhotoGalleryState } from './photo-gallery.state';
import { LocationData } from '@photo-gallery/models/index';

export const getPhotoGalleryState$: MemoizedSelector<PhotoGalleryState, PhotoGalleryState> = createFeatureSelector(
  'photoGallery',
);

export const getUserLocation$: MemoizedSelector<PhotoGalleryState, LocationData> = createSelector(
  getPhotoGalleryState$,
  (state: PhotoGalleryState) => state.userLocation,
);

export const getLocationPermission$: MemoizedSelector<PhotoGalleryState, boolean> = createSelector(
  getPhotoGalleryState$,
  (state: PhotoGalleryState) => state.locationPermission,
);
