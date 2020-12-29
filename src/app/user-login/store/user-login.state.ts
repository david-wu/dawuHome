import { LocationData } from '@photo-gallery/models/index';
import { File } from '@file-explorer/models/index';
import { User } from '@models/index';

export interface UserLoginState  {
  loggedInuser: User,
}

export const initialUserLoginState = {
  loggedInuser: undefined,
};
