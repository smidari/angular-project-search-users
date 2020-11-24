import { FormControl } from '@angular/forms';

export class MyValidators {
  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['v@mail.ru', 'test@mail.com'].includes(control.value)) {
      return { restrictedEmail: false };
    }
    return null;
  }
}
