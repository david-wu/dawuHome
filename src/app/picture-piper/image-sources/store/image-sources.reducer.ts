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

  on(ImageSourcesActions.addImagesBySourceId, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      imagesBySourceId: {
        ...state,
        ...action.payload,
      },
    };
  }),

  on(ImageSourcesActions.setImageSourceViewTab, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      imageSourceViewTab: action.payload,
    };
  }),

  on(ImageSourcesActions.generateImageSourceToken, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      isGeneratingTokenByImageSource: {
        ...state.isGeneratingTokenByImageSource,
        [action.payload]: true,
      },
    };
  }),
  on(ImageSourcesActions.generateImageSourceTokenSuccess, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      isGeneratingTokenByImageSource: {
        ...state.isGeneratingTokenByImageSource,
        [action.payload]: false,
      },
    };
  }),
  on(ImageSourcesActions.generateImageSourceTokenFailure, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      isGeneratingTokenByImageSource: {
        ...state.isGeneratingTokenByImageSource,
        [action.payload]: false,
      },
    };
  }),

  on(ImageSourcesActions.loadImageSourceTokensSuccess, (state: ImageSourcesState, action: any) => {
    return {
      ...state,
      imageSourceTokensByImageSource: {
        ...state.imageSourceTokensByImageSource,
        [action.imageSourceId]: action.imageSourceTokens,
      },
    }
  })
);

export function imageSourcesReducer(state: ImageSourcesState, action: Action): ImageSourcesState {
  return reducer(state, action);
}
