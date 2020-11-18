import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../../user';
import { UserLocalstorageService } from '../../user-localstorage.service';
import {
  EUserFavoriteActions,
  GetUsersFavorite,
  GetUsersFavoriteSuccess,
} from '../action/user-favorite.action';

@Injectable()
export class UserFavoriteEffects {
  @Effect()  getUsersFavorite$ = this.actions$.pipe(
    ofType<GetUsersFavorite>(EUserFavoriteActions.GetUsersFavorite),
    switchMap(() => {
      return this.userLocalstorageService.getFavouritesUsersFromLocalStorage();
    }),
    switchMap((users: User[]) => {
      return of(new GetUsersFavoriteSuccess(users));
    })
  );

  constructor(
    private userLocalstorageService: UserLocalstorageService,
    private actions$: Actions
  ) {}
}
