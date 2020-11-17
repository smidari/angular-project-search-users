import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { selectUserList } from '../../../../store/selectors/user.selector';
import { GetUsers } from '../../../../store/action/user.action';
import {of} from 'rxjs';

@Component({
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
   users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }
}