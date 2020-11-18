import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { Router } from '@angular/router';
import {selectUserFavoriteList} from '../../../../store/selectors/user-favorite.selector';
import {GetUsersFavorite} from '../../../../store/action/user-favorite.action';
import {of} from 'rxjs';


@Component({
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
})
export class UserFavoriteComponent implements OnInit {
    usersFavorite$ = this.store.pipe(select(selectUserFavoriteList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUsersFavorite());
  }
}
