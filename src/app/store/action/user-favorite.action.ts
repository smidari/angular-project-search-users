import { Action } from '@ngrx/store';
import { User } from '../../user';

export enum EUserFavoriteActions {
  GetUsersFavorite = 'Get Users Favorite',
  GetUsersFavoriteSuccess = 'Get Users Favorite Success',
}

export class GetUsersFavorite implements Action {
  public readonly type = EUserFavoriteActions.GetUsersFavorite;
}

export class GetUsersFavoriteSuccess implements Action {
  public readonly type = EUserFavoriteActions.GetUsersFavoriteSuccess;
  constructor(public payload: User[]) {}
}

export type UserFavoriteActions = GetUsersFavorite | GetUsersFavoriteSuccess;
