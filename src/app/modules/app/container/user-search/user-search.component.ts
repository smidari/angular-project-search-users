import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { Router } from '@angular/router';
import {
  AddFavoriteUser,
  GetUsers,
  SetInputValueSearchUser,
} from '../../../../store/action/user.action';
import { selectUsersSortForInputValue } from '../../../../store/selectors/user.selector';
import { User } from '../../../../user';

@Component({
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  usersSortForInputValue$ = this.store.pipe(
    select(selectUsersSortForInputValue)
  );
  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

  setInputValueSearchUser(value: string): void {
    this.store.dispatch(new SetInputValueSearchUser(value));
  }

  addFavoriteUser(user: User): void {
    this.store.dispatch(new AddFavoriteUser(user));
  }
}
