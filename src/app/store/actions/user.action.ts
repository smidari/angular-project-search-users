import { createAction, props } from '@ngrx/store';
import { User } from '../../user';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersFavorite = 'Get Users Favorite',
  GetUsersFavoriteSuccess = 'Get Users Favorite Success',
  SetInputValueSearchUser = 'Set Input Value Search User',
  AddFavoriteUser = 'Add Favorite User',
  AddFavoriteUserSuccess = 'Add Favorite User Success',
  DeleteFavoriteUser = 'Delete Favorite User',
  DeleteFavoriteUserSuccess = 'Delete Favorite User Success',
}

export const GetUsers = createAction(EUserActions.GetUsers);
export const GetUsersSuccess = createAction(
  EUserActions.GetUsersSuccess,
  props<{ users: User[] }>()
);

export const GetUsersFavorite = createAction(EUserActions.GetUsersFavorite);
export const GetUsersFavoriteSuccess = createAction(
  EUserActions.GetUsersFavoriteSuccess,
  props<{ favoriteUsers: User[] }>()
);

export const SetInputValueSearchUser = createAction(
  EUserActions.SetInputValueSearchUser,
  props<{ value: string }>()
);

export const AddFavoriteUser = createAction(
  EUserActions.AddFavoriteUser,
  props<{ user: User }>()
);
export const AddFavoriteUserSuccess = createAction(
  EUserActions.AddFavoriteUserSuccess,
  props<{ user }>()
);

export const DeleteFavoriteUser = createAction(
  EUserActions.DeleteFavoriteUser,
  props<{ user: User }>()
);
export const DeleteFavoriteUserSuccess = createAction(
  EUserActions.DeleteFavoriteUserSuccess,
  props<{ user: User }>()
);
export type UserActions = any;
// | GetUsers
// | GetUsersSuccess
// | GetUsersFavorite
// | GetUsersFavoriteSuccess
// | SetInputValueSearchUser
// | AddFavoriteUser
// | AddFavoriteUserSuccess;
