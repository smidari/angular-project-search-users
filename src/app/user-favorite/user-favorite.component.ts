import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
})
export class UserFavoriteComponent implements OnInit {
  favouritesUsers: User[];
  selectedFavouritesUser: User;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getFavouritesUser();
  }

  getFavouritesUser() {
    this.favouritesUsers = this.userService.getFavouritesUsersFromLocalStorage();
  }

  onSelect(favouritesUser: User): void {
    this.selectedFavouritesUser = favouritesUser;
  }

  trackById(index, item) {
    return item.id;
  }
}
