import { Injectable } from '@angular/core';
import { User } from './user';
import { FAVOURITES } from './const';

@Injectable({
  providedIn: 'root',
})
export class UserLocalstorageService {
  constructor() {}

  getFavouritesUsersFromLocalStorage(): User[] {
    return JSON.parse(<string>localStorage.getItem(FAVOURITES));
  }

  saveFavouritesUsersToLocalStorage(user: User): void {
    let users = this.getFavouritesUsersFromLocalStorage();
    if (!users) {
      localStorage.setItem(FAVOURITES, JSON.stringify([user]));
    } else if (users && !users.some((item) => item.id === user.id)) {
      users = [...users, user];
      localStorage.setItem(FAVOURITES, JSON.stringify(users));
    }
  }
}
