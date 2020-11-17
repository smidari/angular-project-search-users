import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EUserActions, GetUsers, GetUsersSuccess} from '../action/user.action';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {UsersService} from '../../users.service';
import {UserApi} from '../../user';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.usersService.getUsers()),
    switchMap((usersApi: UserApi) => of(new GetUsersSuccess(usersApi.data)))
  );

  constructor(
    private usersService: UsersService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}