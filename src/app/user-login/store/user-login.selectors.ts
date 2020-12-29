import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { UserLoginState } from './user-login.state';
import { File } from '@file-explorer/models/index';

export const getUserLoginState$: MemoizedSelector<UserLoginState, UserLoginState> = createFeatureSelector(
  'UserLogin',
);

// export const getUserLocation$: MemoizedSelector<UserLoginState, LocationData> = createSelector(
//   getUserLoginState$,
//   (state: UserLoginState) => state.userLocation,
// );

export const getLocationPermission$: MemoizedSelector<UserLoginState, boolean> = createSelector(
  getUserLoginState$,
  (state: UserLoginState) => state.locationPermission,
);

export const getFilesById$: MemoizedSelector<UserLoginState, Record<string, File>> = createSelector(
  getUserLoginState$,
  (state: UserLoginState) => state.filesById,
);
