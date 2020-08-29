import {
  createAction,
  props,
} from '@ngrx/store';
import { LocationData } from '@photo-gallery/models/index';
import { User } from '@models/index';

export class AuthActions {
  public static readonly CATEGORY = '[AUTH]';

  public static renderLogin = createAction(
    `${AuthActions.CATEGORY} RENDER_LOGIN`,
    props<{ nativeEl: HTMLElement }>(),
  );
  public static loginSuccess = createAction(
    `${AuthActions.CATEGORY} LOGIN_SUCCESS`,
    props<{ user: User }>(),
  );

  public static signOut = createAction(
    `${AuthActions.CATEGORY} SIGN_OUT`,
    props<{ nativeEl: HTMLElement }>(),
  );
  public static signOutSuccess = createAction(
    `${AuthActions.CATEGORY} SIGN_OUT_SUCCESS`,
  );

  // public static getUserFilesSuccess = createAction(
  //   `${AuthActions.CATEGORY} GET_USER_FILES_SUCCESS`,
  // );
  // public static getUserFilesFailure = createAction(
  //   `${AuthActions.CATEGORY} GET_USER_FILES_FAILURE`,
  // );

}