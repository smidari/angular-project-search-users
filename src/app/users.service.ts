import { Injectable } from '@angular/core';
import { UserApi } from './user';
import { Observable } from 'rxjs';
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
}
