import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-favotite-user',
  templateUrl: './favotite-user.component.html',
  styleUrls: ['./favotite-user.component.css'],
})
export class FavotiteUserComponent implements OnInit {
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
}
