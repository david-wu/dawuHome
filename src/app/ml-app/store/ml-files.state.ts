import { LocationData } from '@photo-gallery/models/index';

export interface MlFilesState  {
  userLocation: LocationData,
  locationPermission: boolean,
}

export const initialMlFilesState = {
  userLocation: undefined,
  locationPermission: undefined,
};
