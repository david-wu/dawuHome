import {
  createAction,
  props,
} from '@ngrx/store';
import { LocationData } from '@photo-gallery/models/index';

class ResourceList {

  public path: string[];

}

export class PicturePiperActions {
  public static readonly CATEGORY = '[PICTURE_PIPER]';

  public static addVisibleResourceList = createAction(
    `${PicturePiperActions.CATEGORY} ADD_VISIBLE_RESOURCE_LIST`,
    props<{ resource: any }>(),
  );
  public static removeVisibleResourceList = createAction(
    `${PicturePiperActions.CATEGORY} REMOVE_VISIBLE_RESOURCE_LIST`,
    props<{ resource: any }>(),
  );
  public static setResourceList = createAction(
    `${PicturePiperActions.CATEGORY} SET_RESOURCE_LIST`,
    props<{ resource: any, list: any[] }>(),
  );


  // public static setImageSourcesListVisible = createAction(
  //   `${PicturePiperActions.CATEGORY} SET_IMAGE_SOURCES_LIST_VISIBLE`,
  //   props<{ payload: boolean }>(),
  // );
  // public static setImageSourcesList = createAction(
  //   `${PicturePiperActions.CATEGORY} SET_IMAGE_SOURCES_LIST`,
  //   props<{ payload: any[] }>(),
  // );

  // public static createImageSource = createAction(
  //   `${PicturePiperActions.CATEGORY} CREATE_IMAGE_SOURCE`,
  // );
  // public static createImageSourceSuccess = createAction(
  //   `${PicturePiperActions.CATEGORY} CREATE_IMAGE_SOURCE_SUCCESS`,
  //   props<{ payload: any }>(),
  // );
  // public static createImageSourceFailure = createAction(
  //   `${PicturePiperActions.CATEGORY} CREATE_IMAGE_SOURCE_FAILURE`,
  //   props<{ payload: any }>(),
  // );

  // public static setSelectedImageSourceId = createAction(
  //   `${PicturePiperActions.CATEGORY} SET_SELECTED_IMAGE_SOURCE_ID`,
  //   props<{ payload: string }>(),
  // );
  // public static loadImagesBySourceId = createAction(
  //   `${PicturePiperActions.CATEGORY} LOAD_IMAGES_BY_SOURCE_ID`,
  //   props<{ payload: string }>(),
  // );
  // public static addImagesBySourceId = createAction(
  //   `${PicturePiperActions.CATEGORY} ADD_IMAGES_BY_SOURCE_ID`,
  //   props<{ payload: Record<string, any[]> }>(),
  // );

  // public static uploadImageSourceFile = createAction(
  //   `${PicturePiperActions.CATEGORY} UPLOAD_IMAGE_SOURCE_FILE`,
  //   props<{ selectedImageSourceId: string, file: File }>(),
  // )
  // public static uploadImageSourceFileSuccess = createAction(
  //   `${PicturePiperActions.CATEGORY} UPLOAD_IMAGE_SOURCE_FILE_SUCCESS`,
  //   props<{ selectedImageSourceId: string }>(),
  // )
  // public static uploadImageSourceFileFailure = createAction(
  //   `${PicturePiperActions.CATEGORY} UPLOAD_IMAGE_SOURCE_FILE_FAILURE`,
  //   props<{ payload: any }>(),
  // )

  // public static deleteUpload = createAction(
  //   `${PicturePiperActions.CATEGORY} DELETE_UPLOAD`,
  //   props<{ payload: string, }>(),
  // )
  // public static deleteUploadSuccess = createAction(
  //   `${PicturePiperActions.CATEGORY} DELETE_UPLOAD_SUCCESS`,
  //   props<{ payload: string }>(),
  // )
  // public static deleteUploadFailure = createAction(
  //   `${PicturePiperActions.CATEGORY} DELETE_UPLOAD_FAILURE`,
  //   props<{ payload: any }>(),
  // )

  // public static setImageSourceViewTab = createAction(
  //   `${PicturePiperActions.CATEGORY} SET_IMAGE_SOURCE_VIEW_TAB`,
  //   props<{ payload: string }>(),
  // )
  // public static navigateToImageSourceView = createAction(
  //   `${PicturePiperActions.CATEGORY} NAVIGATE_TO_IMAGE_SOURCE_VIEW`,
  //   props<{ payload: string }>(),
  // )

  // public static updateImageSource = createAction(
  //   `${PicturePiperActions.CATEGORY} UPDATE_IMAGE_SOURCE`,
  //   props<{ imageSourceId: string, patch: any }>(),
  // )
  // public static updateImageSourceSuccess = createAction(
  //   `${PicturePiperActions.CATEGORY} UPDATE_IMAGE_SOURCE_SUCCESS`,
  //   props<{ imageSourceId: string, patch: any }>(),
  // )
  // public static updateImageSourceFailure = createAction(
  //   `${PicturePiperActions.CATEGORY} UPDATE_IMAGE_SOURCE_FAILURE`,
  //   props<{ imageSourceId: string, patch: any, error: string }>(),
  // )

  // public static generateImageSourceToken = createAction(
  //   `${PicturePiperActions.CATEGORY} GENERATE_IMAGE_SOURCE_TOKEN`,
  //   props<{ payload: string }>(),
  // )
  // public static generateImageSourceTokenSuccess = createAction(
  //   `${PicturePiperActions.CATEGORY} GENERATE_IMAGE_SOURCE_TOKEN_SUCCESS`,
  //   props<{ payload: string }>(),
  // )
  // public static generateImageSourceTokenFailure = createAction(
  //   `${PicturePiperActions.CATEGORY} GENERATE_IMAGE_SOURCE_TOKEN_FAILURE`,
  //   props<{ payload: string }>(),
  // )

  // public static loadImageSourceTokens = createAction(
  //   `${PicturePiperActions.CATEGORY} LOAD_IMAGE_SOURCE_TOKENS`,
  //   props<{ imageSourceId: string }>(),
  // )
  // public static loadImageSourceTokensSuccess = createAction(
  //   `${PicturePiperActions.CATEGORY} LOAD_IMAGE_SOURCE_TOKENS_SUCCESS`,
  //   props<{ imageSourceId: string, imageSourceTokens: any[] }>(),
  // )
  // public static loadImageSourceTokensFailure = createAction(
  //   `${PicturePiperActions.CATEGORY} LOAD_IMAGE_SOURCE_TOKENS_FAILURE`,
  //   props<{ imageSourceId: string }>(),
  // )

}