import { Injectable } from '@angular/core';
import { ApiAuthResponse, UserApi, UserForLogin } from './user';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AUTH_TOKEN } from './const';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem(AUTH_TOKEN);
  }

  getUsers(): Observable<UserApi> {
    const url = `https://reqres.in/api/users?page=2`;
    return this.http.get<UserApi>(url);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }

  login(user: UserForLogin): Observable<any> {
    return this.http
      .post(`https://reqres.in/api/login`, user)
      .pipe(tap(this.setToken), catchError(this.handelError.bind(this)));

    // {
    //   "email": "eve.holt@reqres.in",
    //   "password": "cityslicka"
    // }
  }

  logout(): void {
    this.setToken(null);
  }

  // авторизован юзер или нет
  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: ApiAuthResponse | null): void {
    console.log(response);
    response
      ? localStorage.setItem(AUTH_TOKEN, response.token)
      : localStorage.removeItem(AUTH_TOKEN);
  }
//test

  private handelError(error: HttpErrorResponse): Observable<any> {
    const message = error.error.error;
    console.log('message', message);
    if (message === 'user not found') {
      this.error$.next('User not found');
    }
    return throwError(error);
  }
}
