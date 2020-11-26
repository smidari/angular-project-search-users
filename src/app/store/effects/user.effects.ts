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
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from '../../users.service';
import { User, UserApi } from '../../user';
import { UserLocalstorageService } from '../../user-localstorage.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() =>
      this.usersService.getUsers().pipe(
        map((usersApi: UserApi) => new GetUsersSuccess(usersApi.data)),
        catchError((err) => of(`I caught: ${err}`))
      )
    )
  );

  @Effect() getUsersFavorite$ = this.actions$.pipe(
    ofType<GetUsersFavorite>(EUserActions.GetUsersFavorite),
    switchMap(() =>
      this.userLocalstorageService.getFavouritesUsersFromLocalStorage().pipe(
        map((users: User[]) => new GetUsersFavoriteSuccess(users)),
        catchError((err) => of(`I caught: ${err}`))
      )
    )
  );

  @Effect() addToNewFavoriteUser$ = this.actions$.pipe(
    ofType<AddFavoriteUser>(EUserActions.AddFavoriteUser),
    switchMap((user) => {
      return this.userLocalstorageService
        .saveFavouritesUsersToLocalStorage(user.payload)
        .pipe(
          map((value: User) => new AddFavoriteUserSuccess(value)),
          catchError((err) => of(`I caught: ${err}`))
        );
    })
  );

  constructor(
    private usersService: UsersService,
    private userLocalstorageService: UserLocalstorageService,
    private actions$: Actions
  ) {}
}
