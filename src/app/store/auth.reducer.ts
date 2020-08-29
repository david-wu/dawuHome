import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';

import { AuthActions } from './auth.actions';
import {
  initialAuthState,
  AuthState,
} from './auth.state';

const reducer: ActionReducer<AuthState> = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state: AuthState, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(AuthActions.signOutSuccess, (state: AuthState, action: AuthActions) => {
    return {
      ...state,
      user: undefined,
    };
  }),
);

export function authReducer(state: AuthState, action: Action): AuthState {
  return reducer(state, action);
}
