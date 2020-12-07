import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public usersService: UsersService) {}

  ngOnInit(): void {}

  logout($event: Event): void {
    this.usersService.logout();
    this.router.navigate(['/login']);
  }
}
