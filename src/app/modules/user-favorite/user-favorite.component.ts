import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UsersService } from '../../users.service';
import { UserLocalstorageService } from '../../user-localstorage.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFavoriteComponent implements OnInit {
  favouritesUsers: User[];
  selectedFavouritesUser: User;
  constructor(
    private userService: UsersService,
    private userLocalstorageService: UserLocalstorageService
  ) {}

  ngOnInit(): void {
    this.getFavouritesUser();
  }

  getFavouritesUser(): void {
    this.favouritesUsers = this.userLocalstorageService.getFavouritesUsersFromLocalStorage();
  }

  onSelect(favouritesUser: User): void {
    this.selectedFavouritesUser = favouritesUser;
  }

  trackById(index, item): number {
    return item.id;
  }
}
