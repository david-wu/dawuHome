import {
  Action,
  ActionReducer,
  createReducer,
  on,
} from '@ngrx/store';

import { AuthActions } from '@src/app/store/auth.actions';
import {
  initialAuthState,
  AuthState,
} from '@src/app/store/auth.state';

const reducer: ActionReducer<AuthState> = createReducer(
  initialAuthState,
  on(AuthActions.setUser, (state: AuthState, action) => {
    return {
      ...state,
      user: action.payload,
    };
  }),
);

export function authReducer(state: AuthState, action: Action): AuthState {
  return reducer(state, action);
}
