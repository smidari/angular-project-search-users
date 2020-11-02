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

  addUserToFavourites(id: any) {
    const newFavouritesUser = this.users.find((user) => user.id === id);
    if (!this.favouritesUser.find((item) => item.id === id)) {
      this.favouritesUser = [...this.favouritesUser, newFavouritesUser];
    }
    localStorage.setItem('favourites', JSON.stringify(this.favouritesUser));
  }
}
