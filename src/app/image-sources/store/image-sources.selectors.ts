import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { map } from 'rxjs/operators';
import { keyBy } from 'lodash';

import { ImageSourcesState } from './image-sources.state';

export const getImageSourcesState$: MemoizedSelector<ImageSourcesState, ImageSourcesState> = createFeatureSelector(
  'imageSources',
);

export const getImageSourcesListVisible$: MemoizedSelector<ImageSourcesState, boolean> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.imageSourcesListVisible,
);

export const getImageSourcesList$: MemoizedSelector<ImageSourcesState, any[]> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.imageSourcesList,
);

export const getImageSourcesById$: MemoizedSelector<ImageSourcesState, Record<string, any>> = createSelector(
  getImageSourcesList$,
  (imageSourcesList: any[]) => keyBy(imageSourcesList, 'id'),
);

export const getSelectedImageSourceId$: MemoizedSelector<ImageSourcesState, string> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.selectedImageSourceId,
);

export const getSelectedImageSource$: MemoizedSelector<ImageSourcesState, any> = createSelector(
  getImageSourcesById$,
  getSelectedImageSourceId$,
  (imageSourcesById: Record<string, any>, sourceId: string) => imageSourcesById[sourceId],
);

export const getImagesBySourceId$: MemoizedSelector<ImageSourcesState, Record<string, any[]>> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.imagesBySourceId,
);

export const getImageSourceViewTab$: MemoizedSelector<ImageSourcesState, string> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.imageSourceViewTab,
);

