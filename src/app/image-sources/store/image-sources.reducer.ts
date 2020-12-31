import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';

import { ImageSourcesActions } from './image-sources.actions';
import {
  initialImageSourcesState,
  ImageSourcesState,
} from './image-sources.state';

const reducer: ActionReducer<ImageSourcesState> = createReducer(
  initialImageSourcesState,

  on(ImageSourcesActions.setImageSourcesListVisible, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      imageSourcesListVisible: action.payload,
    };
  }),

  on(ImageSourcesActions.setImageSourcesList, (state: ImageSourcesState, action: any) => {
    const imageSourcesList = action.payload || [];
    // const defaultId = imageSourcesList.length ? [imageSourcesList[0].id] : [];
    return {
      ...state,
      imageSourcesList,
      // selectedImageSourceIds: state.selectedImageSourceIds.size ? state.selectedImageSourceIds : new Set(defaultId),
    };
  }),

  on(ImageSourcesActions.createImageSourceSuccess, (state: ImageSourcesState, action: any) => {
    return state;
  }),

  on(ImageSourcesActions.createImageSourceFailure, (state: ImageSourcesState, action: any) => {
    return state;
  }),

  on(ImageSourcesActions.setSelectedImageSourceId, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      selectedImageSourceId: action.payload,
    };
  }),

);

export function imageSourcesReducer(state: ImageSourcesState, action: Action): ImageSourcesState {
  return reducer(state, action);
}
