import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { MlFilesState } from './ml-files.state';
import { File } from '@file-explorer/models/index';

export const getMlFilesState$: MemoizedSelector<MlFilesState, MlFilesState> = createFeatureSelector(
  'mlFiles',
);

// export const getUserLocation$: MemoizedSelector<MlFilesState, LocationData> = createSelector(
//   getMlFilesState$,
//   (state: MlFilesState) => state.userLocation,
// );

export const getLocationPermission$: MemoizedSelector<MlFilesState, boolean> = createSelector(
  getMlFilesState$,
  (state: MlFilesState) => state.locationPermission,
);

export const getFilesById$: MemoizedSelector<MlFilesState, Record<string, File>> = createSelector(
  getMlFilesState$,
  (state: MlFilesState) => {
    // console.log('state', state)
    return state.filesById
  },
);
