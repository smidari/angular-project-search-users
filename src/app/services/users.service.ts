import { Injectable } from '@angular/core';
import { ApiAuthResponse, UserApi, UserForLogin } from '../user';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { AUTH_TOKEN } from '../const';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public error$: Subject<string> = new Subject<string>();
  public token$: BehaviorSubject<string | null>  = new BehaviorSubject<string|undefined>(this.token);
  public isAuthenticated$: Observable<boolean> = this.token$.asObservable().pipe(map(value => !!value));

  constructor(private http: HttpClient) {
  }

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
  // API data for LOGIN - SUCCESSFUL {"email": "eve.holt@reqres.in", "password": "cityslicka" }
  login(user: UserForLogin): Observable<any> {
    return this.http
      .post(`https://reqres.in/api/login`, user)
      .pipe(tap(this.setToken.bind(this)), catchError(this.handelError.bind(this)));
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  setToken(response: ApiAuthResponse | null): void {
    response
      ? localStorage.setItem(AUTH_TOKEN, response.token)
      : localStorage.removeItem(AUTH_TOKEN);
    this.token$.next(this.token);
  }

  private handelError(error: HttpErrorResponse): Observable<any> {
    const message = error.error.error;
    if (message === 'user-page not found') {
      this.error$.next('User not found');
    }
    return throwError(error);
  }
}
