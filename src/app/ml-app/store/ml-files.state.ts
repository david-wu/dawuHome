import { LocationData } from '@photo-gallery/models/index';
import { File } from '@file-explorer/models/index';

export interface MlFilesState  {
  filesById: Record<string, File>,
  userLocation: LocationData,
  locationPermission: boolean,
}

export const initialMlFilesState = {
  filesById: {},
  userLocation: undefined,
  locationPermission: undefined,
};
