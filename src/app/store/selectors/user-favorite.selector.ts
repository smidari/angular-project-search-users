import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IUserFavoriteState } from '../state/user-favorite.state';

const selectUsersFavorite = (state: IAppState) => state.favoriteUsers;

export const selectUserFavoriteList = createSelector(
  selectUsersFavorite,
  (state: IUserFavoriteState) => state.favoriteUsers
);
