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

}