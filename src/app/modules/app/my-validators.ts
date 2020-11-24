import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService } from '../../users.service';

export class MyValidators {
  // constructor(userService: UsersService) {}
  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['v@mail.ru', 'test@mail.com'].includes(control.value)) {
      return { restrictedEmail: false };
    }
    return null;
  }

  // static uniqEmail(control: FormControl): Observable<any> {
  //   const users = this.userService.getUsers();
  //   return null;
  // }
}
