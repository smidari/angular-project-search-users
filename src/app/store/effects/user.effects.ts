import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  EUserActions,
  GetUsers,
  GetUsersFavorite,
  GetUsersFavoriteSuccess,
  GetUsersSuccess,
} from '../action/user.action';
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
    switchMap(() => {
      return this.usersService.getUsers();
    }),
    switchMap((usersApi: UserApi) => of(new GetUsersSuccess(usersApi.data)))
  );

  @Effect() getUsersFavorite$ = this.actions$.pipe(
    ofType<GetUsersFavorite>(EUserActions.GetUsersFavorite),
    switchMap(() => {
      return this.userLocalstorageService.getFavouritesUsersFromLocalStorage();
    }),
    switchMap((users: User[]) => {
      return of(new GetUsersFavoriteSuccess(users));
    })
  );

  // @Effect() addToNewFavoriteUser$ = this.actions$.pipe()

  constructor(
    private usersService: UsersService,
    private userLocalstorageService: UserLocalstorageService,
    private actions$: Actions
  ) {}
}
