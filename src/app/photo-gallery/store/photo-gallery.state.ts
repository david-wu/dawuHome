import { LocationData } from '@photo-gallery/models/index';

export interface PhotoGalleryState  {
  userLocation: LocationData,
  locationPermission: boolean,
}

export const initialPhotoGalleryState = {
  userLocation: undefined,
  locationPermission: undefined,
};
