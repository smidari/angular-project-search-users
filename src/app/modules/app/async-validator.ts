import { Observable, of } from 'rxjs';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CustomAsyncValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomAsyncValidatorDirective implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of({ custom: true });
  }
}
