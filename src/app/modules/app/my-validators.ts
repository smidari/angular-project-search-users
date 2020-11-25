import {
  FormControl,
} from '@angular/forms';
import { timer } from 'rxjs';
import { UsersService } from '../../users.service';
import { map, switchMap } from 'rxjs/operators';

export class MyValidators {
  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['v@mail.ru', 'test@mail.com'].includes(control.value)) {
      return { restrictedEmail: false };
    }
    return null;
  }
  // для проверки, есть пользователь с таким email tobias.funke@reqres.in
  static uniqEmail = (userService: UsersService, time: number = 500) => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => userService.getUsers()),
        map((res) => {
          return res.data.some((user) => user.email === input.value)
            ? { loginExist: true }
            : null;
        })
      );
    };
  }
}
