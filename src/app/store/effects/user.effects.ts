import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddFavoriteUser,
  AddFavoriteUserSuccess,
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
    ofType(GetUsers),
    switchMap(() =>
      this.usersService.getUsers().pipe(
        map((usersApi: UserApi) => {
          return GetUsersSuccess({ users: usersApi.data });
        }),
        catchError((err) => of(`I caught: ${err}`))
      )
    )
  );

  @Effect() getUsersFavorite$ = this.actions$.pipe(
    ofType(GetUsersFavorite),
    switchMap(() =>
      this.userLocalstorageService.getFavouritesUsersFromLocalStorage().pipe(
        map((users: User[]) =>
          GetUsersFavoriteSuccess({ favoriteUsers: users })
        ),
        catchError((err) => of(`I caught: ${err}`))
      )
    )
  );

  @Effect() addToNewFavoriteUser$ = this.actions$.pipe(
    ofType(AddFavoriteUser),
    switchMap((user) => {
      console.log('effect', user);
      return this.userLocalstorageService
        .saveFavouritesUsersToLocalStorage(user.user)
        .pipe(
          map((value: User) => {
            console.log(value);
            return AddFavoriteUserSuccess({ user: value });
          }),
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
