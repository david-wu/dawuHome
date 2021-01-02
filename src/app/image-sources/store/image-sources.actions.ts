import {
  createAction,
  props,
} from '@ngrx/store';
import { LocationData } from '@photo-gallery/models/index';

export class ImageSourcesActions {
  public static readonly CATEGORY = '[IMAGE_SOURCES]';

  public static setImageSourcesListVisible = createAction(
    `${ImageSourcesActions.CATEGORY} SET_IMAGE_SOURCES_LIST_VISIBLE`,
    props<{ payload: boolean }>(),
  );
  public static setImageSourcesList = createAction(
    `${ImageSourcesActions.CATEGORY} SET_IMAGE_SOURCES_LIST`,
    props<{ payload: any[] }>(),
  );

  public static createImageSource = createAction(
    `${ImageSourcesActions.CATEGORY} CREATE_IMAGE_SOURCE`,
  );
  public static createImageSourceSuccess = createAction(
    `${ImageSourcesActions.CATEGORY} CREATE_IMAGE_SOURCE_SUCCESS`,
    props<{ payload: any }>(),
  );
  public static createImageSourceFailure = createAction(
    `${ImageSourcesActions.CATEGORY} CREATE_IMAGE_SOURCE_FAILURE`,
    props<{ payload: any }>(),
  );

  public static setSelectedImageSourceId = createAction(
    `${ImageSourcesActions.CATEGORY} SET_SELECTED_IMAGE_SOURCE_ID`,
    props<{ payload: string }>(),
  );
  public static loadImagesBySourceId = createAction(
    `${ImageSourcesActions.CATEGORY} LOAD_IMAGES_BY_SOURCE_ID`,
    props<{ payload: string }>(),
  );
  public static addImagesBySourceId = createAction(
    `${ImageSourcesActions.CATEGORY} ADD_IMAGES_BY_SOURCE_ID`,
    props<{ payload: Record<string, any[]> }>(),
  );

  public static uploadImageSourceFile = createAction(
    `${ImageSourcesActions.CATEGORY} UPLOAD_IMAGE_SOURCE_FILE`,
    props<{ selectedImageSourceId: string, file: File }>(),
  )
  public static uploadImageSourceFileSuccess = createAction(
    `${ImageSourcesActions.CATEGORY} UPLOAD_IMAGE_SOURCE_FILE_SUCCESS`,
    props<{ selectedImageSourceId: string }>(),
  )
  public static uploadImageSourceFileFailure = createAction(
    `${ImageSourcesActions.CATEGORY} UPLOAD_IMAGE_SOURCE_FILE_FAILURE`,
    props<{ payload: any }>(),
  )

  public static deleteUpload = createAction(
    `${ImageSourcesActions.CATEGORY} DELETE_UPLOAD`,
    props<{ payload: string, }>(),
  )
  public static deleteUploadSuccess = createAction(
    `${ImageSourcesActions.CATEGORY} DELETE_UPLOAD_SUCCESS`,
    props<{ payload: string }>(),
  )
  public static deleteUploadFailure = createAction(
    `${ImageSourcesActions.CATEGORY} DELETE_UPLOAD_FAILURE`,
    props<{ payload: any }>(),
  )

  public static setImageSourceViewTab = createAction(
    `${ImageSourcesActions.CATEGORY} SET_IMAGE_SOURCE_VIEW_TAB`,
    props<{ payload: string }>(),
  )
  public static navigateToImageSourceView = createAction(
    `${ImageSourcesActions.CATEGORY} NAVIGATE_TO_IMAGE_SOURCE_VIEW`,
    props<{ payload: string }>(),
  )
}