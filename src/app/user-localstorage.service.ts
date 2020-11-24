import { Injectable } from '@angular/core';
import { User } from './user';
import { FAVOURITES } from './const';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLocalstorageService {
  constructor() {}

  getFavouritesUsersFromLocalStorage(): Observable<User[]> {
    return of(JSON.parse(localStorage.getItem(FAVOURITES) as string));
  }

  saveFavouritesUsersToLocalStorage(user: User): Observable<User> {
    let users = JSON.parse(localStorage.getItem(FAVOURITES));
    if (!users) {
      localStorage.setItem(FAVOURITES, JSON.stringify([user]));
    } else if (users && !users.some((item) => item.id === user.id)) {
      users = [...users, user];
      localStorage.setItem(FAVOURITES, JSON.stringify(users));
    }
    return of(user);
  }
}
