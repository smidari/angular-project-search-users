import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  @Input()
  users: User[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
  }

  trackById(index, item): number {
    return item.id;
  }
}
