import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { User } from '../../../../user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllUsersComponent implements OnInit {
  @Input()
  users: User[];
  constructor() {}

  ngOnInit(): void {
  }

  trackById(index, item): number {
    return item.id;
  }
}
