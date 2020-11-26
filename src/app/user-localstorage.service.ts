import {Inject, Injectable, InjectionToken} from '@angular/core';
import { User } from './user';
import { FAVOURITES } from './const';
import { Observable, of } from 'rxjs';


export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});


@Injectable({
  providedIn: 'root',
})
export class UserLocalstorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  getFavouritesUsersFromLocalStorage(): Observable<User[]> {
    return of(JSON.parse(this.storage.getItem(FAVOURITES) as string));
  }

  saveFavouritesUsersToLocalStorage(user: User): Observable<User> {
    console.log('localstorage', user);
    let users = JSON.parse(this.storage.getItem(FAVOURITES));
    if (!users) {
      this.storage.setItem(FAVOURITES, JSON.stringify([user]));
    } else if (users && !users.some((item) => item.id === user.id)) {
      users = [...users, user];
      this.storage.setItem(FAVOURITES, JSON.stringify(users));
    }
    return of(user);
  }
}
