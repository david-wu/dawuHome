import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { map } from 'rxjs/operators';
import { keyBy } from 'lodash';

import { PicturePiperState } from './picture-piper.state';

export const getPicturePiperState$: MemoizedSelector<PicturePiperState, PicturePiperState> = createFeatureSelector(
  'picturePiper',
);

export const getVisibleResourceListCounts$: MemoizedSelector<PicturePiperState, boolean> = createSelector(
  getPicturePiperState$,
  (state: PicturePiperState) => state.visibleResourceListCounts,
);

export const getResourceLists$: MemoizedSelector<PicturePiperState, boolean> = createSelector(
  getPicturePiperState$,
  (state: PicturePiperState) => state.resourceLists,
);

export const getResourceListsLoading$: MemoizedSelector<PicturePiperState, boolean> = createSelector(
  getPicturePiperState$,
  (state: PicturePiperState) => state.resourceListsLoading,
);
