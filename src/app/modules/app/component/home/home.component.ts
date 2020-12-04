import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}
