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


  public static addVisibleResourceDoc = createAction(
    `${PicturePiperActions.CATEGORY} ADD_VISIBLE_RESOURCE_DOC`,
    props<{ resource: any }>(),
  );
  public static removeVisibleResourceDoc = createAction(
    `${PicturePiperActions.CATEGORY} REMOVE_VISIBLE_RESOURCE_DOC`,
    props<{ resource: any }>(),
  );
  public static setResourceDoc = createAction(
    `${PicturePiperActions.CATEGORY} SET_RESOURCE_DOC`,
    props<{ resource: any, doc: any[] }>(),
  );

}