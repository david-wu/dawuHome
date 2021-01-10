import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';

import { ImageStreamsActions } from '@src/app/picture-piper/image-streams/store/image-streams.actions';
import {
  ImageStreamsState,
  initialImageStreamsState,
} from '@src/app/picture-piper/image-streams/store/image-streams.state';

const reducer: ActionReducer<ImageStreamsState> = createReducer(
  initialImageStreamsState,

  on(ImageStreamsActions.setImageStreamsListVisible, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      imageStreamsListVisible: action.payload,
    };
  }),

  on(ImageStreamsActions.setImageStreamsList, (state: ImageStreamsState, action: any) => {
    const imageStreamsList = action.payload || [];
    // const defaultId = imageStreamsList.length ? [imageStreamsList[0].id] : [];
    return {
      ...state,
      imageStreamsList,
      // selectedImageStreamIds: state.selectedImageStreamIds.size ? state.selectedImageStreamIds : new Set(defaultId),
    };
  }),

  on(ImageStreamsActions.createImageStreamSuccess, (state: ImageStreamsState, action: any) => {
    return state;
  }),

  on(ImageStreamsActions.createImageStreamFailure, (state: ImageStreamsState, action: any) => {
    return state;
  }),

  on(ImageStreamsActions.setSelectedImageStreamId, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      selectedImageStreamId: action.payload,
    };
  }),

  on(ImageStreamsActions.addImagesByStreamId, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      imagesByStreamId: {
        ...state,
        ...action.payload,
      },
    };
  }),

  on(ImageStreamsActions.setImageStreamViewTab, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      imageStreamViewTab: action.payload,
    };
  }),

  on(ImageStreamsActions.generateImageStreamToken, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      isGeneratingTokenByImageStream: {
        ...state.isGeneratingTokenByImageStream,
        [action.payload]: true,
      },
    };
  }),
  on(ImageStreamsActions.generateImageStreamTokenSuccess, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      isGeneratingTokenByImageStream: {
        ...state.isGeneratingTokenByImageStream,
        [action.payload]: false,
      },
    };
  }),
  on(ImageStreamsActions.generateImageStreamTokenFailure, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      isGeneratingTokenByImageStream: {
        ...state.isGeneratingTokenByImageStream,
        [action.payload]: false,
      },
    };
  }),

  on(ImageStreamsActions.loadImageStreamTokensSuccess, (state: ImageStreamsState, action: any) => {
    return {
      ...state,
      imageStreamTokensByImageStream: {
        ...state.imageStreamTokensByImageStream,
        [action.imageStreamId]: action.imageStreamTokens,
      },
    };
  })
);

export function imageStreamsReducer(state: ImageStreamsState, action: Action): ImageStreamsState {
  return reducer(state, action);
}
