import { Injectable } from '@angular/core';
import {User, UserApi} from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserApi> {
    const url = `https://reqres.in/api/users?page=2`;
    return this.http.get<UserApi>(url);
  }

  // Метод для запроса пользователя
  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get<User>(url);
  }
}
