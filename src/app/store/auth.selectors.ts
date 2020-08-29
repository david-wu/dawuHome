import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { AuthState } from './auth.state';
import { User } from '@models/index';

export const getAuthState$: MemoizedSelector<AuthState, AuthState> = createFeatureSelector(
  'auth',
);

export const getUser$: MemoizedSelector<AuthState, User> = createSelector(
  getAuthState$,
  (state: AuthState) => state.user,
)

export const getAuthLoading$: MemoizedSelector<AuthState, boolean> = createSelector(
  getUser$,
  (user: User) => user === undefined,
);

export const getCanLogin$: MemoizedSelector<AuthState, boolean> = createSelector(
  getUser$,
  (user: User) => user === null,
)
