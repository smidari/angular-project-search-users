import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { UserApi } from '../../user';
import { Observable } from 'rxjs';
import { UsersService } from '../../users.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserApi> {
  constructor(private usersService: UsersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserApi> | Promise<UserApi> | UserApi {
    return this.usersService.getUser(+route.params.id);
  }
}

