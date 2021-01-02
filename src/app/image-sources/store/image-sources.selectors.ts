import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
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

export const getSelectedImageSourceId$: MemoizedSelector<ImageSourcesState, string> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.selectedImageSourceId,
);

export const getImagesBySourceId$: MemoizedSelector<ImageSourcesState, Record<string, any[]>> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.imagesBySourceId,
);

export const getImageSourceViewTab$: MemoizedSelector<ImageSourcesState, string> = createSelector(
  getImageSourcesState$,
  (state: ImageSourcesState) => state.imageSourceViewTab,
);

