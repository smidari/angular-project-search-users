import { Injectable } from '@angular/core';
import { User, UserApi } from './user';
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

  getUser(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
