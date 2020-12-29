import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { keyBy } from 'lodash';

import { UserLoginActions } from './user-login.actions';
import {
  initialUserLoginState,
  UserLoginState,
} from './user-login.state';
import { File } from '@file-explorer/models/index';

const reducer: ActionReducer<UserLoginState> = createReducer(
  initialUserLoginState,
  on(UserLoginActions.getUserFilesSuccess, (state: UserLoginState, action) => {
    // console.log('UserLoginState state', state)
    const incomingFilesById = keyBy(action.files, 'id');
    // console.log('incomingFilesById', incomingFilesById)
    return {
      ...state,
      filesById: {
        ...state.filesById,
        ...incomingFilesById,
      },
    };
  }),
  // on(UserLoginActions.setUserLocation, (state: UserLoginState, action: any) => {
  //   console.log('setUserLocation action', action, state)
  //   return {
  //     ...state,
  //     userLocation: action.userLocation,
  //   };
  // }),
  // on(UserLoginActions.setUserLocationPermission, (state: UserLoginState, action: any) => {
  //   console.log('action, setUserLocationPermission', action)
  //   return {
  //     ...state,
  //     locationPermission: action.locationPermission,
  //   };
  // }),
);

export function UserLoginReducer(state: UserLoginState, action: Action): UserLoginState {
  return reducer(state, action);
}

// interface UserLoginState  {

// }

// export const UserLoginReducerMap: ActionReducerMap<UserLoginState> = {
//   UserLoginState: '',
// };
