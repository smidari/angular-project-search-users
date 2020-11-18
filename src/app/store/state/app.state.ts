import { RouterReducerState } from '@ngrx/router-store';

import { initialUserState, IUserState } from './user.state';
import {initialUserFavoriteState, IUserFavoriteState} from './user-favorite.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  favoriteUsers: IUserFavoriteState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  favoriteUsers: initialUserFavoriteState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
