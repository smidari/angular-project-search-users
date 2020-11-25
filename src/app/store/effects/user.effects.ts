import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddFavoriteUser,
  AddFavoriteUserSuccess,
  EUserActions,
  GetUsers,
  GetUsersFavorite,
  GetUsersFavoriteSuccess,
  GetUsersSuccess,
} from '../actions/user.action';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from '../../users.service';
import { User, UserApi } from '../../user';
import { UserLocalstorageService } from '../../user-localstorage.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.usersService.getUsers()),
    switchMap((usersApi: UserApi) => of(new GetUsersSuccess(usersApi.data)))
  );

  @Effect() getUsersFavorite$ = this.actions$.pipe(
    ofType<GetUsersFavorite>(EUserActions.GetUsersFavorite),
    switchMap(() =>
      this.userLocalstorageService.getFavouritesUsersFromLocalStorage()
    ),
    switchMap((users: User[]) => of(new GetUsersFavoriteSuccess(users)))
  );

  @Effect() addToNewFavoriteUser$ = this.actions$.pipe(
    ofType<AddFavoriteUser>(EUserActions.AddFavoriteUser),
    switchMap((user) => {
      return this.userLocalstorageService.saveFavouritesUsersToLocalStorage(
        user.payload
      );
    }),
    switchMap((user: User) => of(new AddFavoriteUserSuccess(user)))
  );

  constructor(
    private usersService: UsersService,
    private userLocalstorageService: UserLocalstorageService,
    private actions$: Actions
  ) {}
}
