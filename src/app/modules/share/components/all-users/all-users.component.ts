import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '../../../../user';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'avatar',
    'first_name',
    'last_name',
    'email',

  ];

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
