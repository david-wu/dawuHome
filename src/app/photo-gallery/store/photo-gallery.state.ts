import { LocationData } from '@photo-gallery/models/index';

export interface PhotoGalleryState  {
  nearbyLocationsRequired: boolean,
  userLocation: LocationData,
  locationPermission: boolean,
}

export const initialPhotoGalleryState = {
  nearbyLocationsRequired: false,
  userLocation: undefined,
  locationPermission: undefined,
};
