import { LocationData } from '@photo-gallery/models/index';
import { User } from '@models/index';

export interface AuthState  {
  user: User,
  userLocation: LocationData,
  locationPermission: boolean,
}

export const initialAuthState = {
  user: undefined,
  userLocation: undefined,
  locationPermission: undefined,
};
