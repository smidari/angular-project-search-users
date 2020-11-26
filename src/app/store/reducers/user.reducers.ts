import { initialUserState } from '../state/user.state';
import * as userActions from '../actions/user.action';
import { createReducer, on } from '@ngrx/store';

export const userReducers = createReducer(
  initialUserState,
  on(userActions.GetUsersSuccess, (state, { users }) => ({
    ...state,
    users,
  })),
  on(userActions.GetUsersFavoriteSuccess, (state, { favoriteUsers }) => ({
    ...state,
    favoriteUsers,
  })),
  on(userActions.SetInputValueSearchUser, (state, {value}) => ({
    ...state,
    inputValueSearchUser: value,
  })),
  on(userActions.AddFavoriteUserSuccess, (state, {user}) => ({
    ...state,
    favoriteUsers: [...state.favoriteUsers, user],
  }))
);
