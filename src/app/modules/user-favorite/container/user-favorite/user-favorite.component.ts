import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { Router } from '@angular/router';
import { GetUsersFavorite } from '../../../../store/actions/user.action';
import { selectFavoriteUserList } from '../../../../store/selectors/user.selector';

@Component({
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
})
export class UserFavoriteComponent implements OnInit {
  usersFavorite$ = this.store.pipe(select(selectFavoriteUserList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(GetUsersFavorite());
  }
}
