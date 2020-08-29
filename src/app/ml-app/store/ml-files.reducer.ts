import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';

import { MlFilesActions } from './ml-files.actions';
import {
  initialMlFilesState,
  MlFilesState,
} from './ml-files.state';

const reducer: ActionReducer<MlFilesState> = createReducer(
  initialMlFilesState,
  // on(MlFilesActions.requestUserLocation, (state: MlFilesState, action: MlFilesActions) => {
  //   console.log('MlFilesState state', state)
  //   return {
  //     ...state,
  //     userLocation: undefined,
  //   };
  // }),
  // on(MlFilesActions.setUserLocation, (state: MlFilesState, action: any) => {
  //   console.log('setUserLocation action', action, state)
  //   return {
  //     ...state,
  //     userLocation: action.userLocation,
  //   };
  // }),
  // on(MlFilesActions.setUserLocationPermission, (state: MlFilesState, action: any) => {
  //   console.log('action, setUserLocationPermission', action)
  //   return {
  //     ...state,
  //     locationPermission: action.locationPermission,
  //   };
  // }),
);

export function mlFilesReducer(state: MlFilesState, action: Action): MlFilesState {
  return reducer(state, action);
}

// interface MlFilesState  {

// }

// export const MlFilesReducerMap: ActionReducerMap<MlFilesState> = {
//   MlFilesState: '',
// };
