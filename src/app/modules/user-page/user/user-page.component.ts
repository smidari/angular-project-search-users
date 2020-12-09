import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../user';

@Component({
  selector: 'app-page-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({user}) => (this.user = user.data));
  }
}
