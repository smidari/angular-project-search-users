import {Action, createAction} from '@ngrx/store';
import { User } from '../../user';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersFavorite = 'Get Users Favorite',
  GetUsersFavoriteSuccess = 'Get Users Favorite Success',
  SetInputValueSearchUser = 'Set Input Value Search User',
  AddFavoriteUser = 'Add Favorite User',
  AddFavoriteUserSuccess = 'Add Favorite User Success',
}

// export class GetUsers implements Action {
//   public readonly type = EUserActions.GetUsers;
// }

export const GetUsers = createAction('[Counter] Increment');

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: User[]) {}
}

export class GetUsersFavorite implements Action {
  public readonly type = EUserActions.GetUsersFavorite;
}

export class GetUsersFavoriteSuccess implements Action {
  public readonly type = EUserActions.GetUsersFavoriteSuccess;
  constructor(public payload: User[]) {}
}

export class SetInputValueSearchUser implements Action {
  public readonly type = EUserActions.SetInputValueSearchUser;
  constructor(public payload: string) {}
}

export class AddFavoriteUser implements Action {
  public readonly type = EUserActions.AddFavoriteUser;
  constructor(public payload: User) {}
}

export class AddFavoriteUserSuccess implements Action {
  public readonly type = EUserActions.AddFavoriteUserSuccess;
  constructor(public payload: User) {}
}

export type UserActions =
  | GetUsers
  | GetUsersSuccess
  | GetUsersFavorite
  | GetUsersFavoriteSuccess
  | SetInputValueSearchUser
  | AddFavoriteUser
  | AddFavoriteUserSuccess;
