import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  favouritesUser: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users.data));
  }

  addUserToFavourites(user: User) {
    this.userService.saveFavouritesUsersToLocalStorage(user);
  }
}
