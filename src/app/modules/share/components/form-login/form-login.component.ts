import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './validators/my-validators';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  subscription$;
  constructor(public userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required, MyValidators.restrictedEmails],
        MyValidators.uniqEmail(this.userService)
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.isSubmitted = true;
    const { email, password } = this.form.value;
    this.subscription$ = this.userService
      .login({ email, password })
      .pipe(
        finalize(() => {
          this.isSubmitted = false;
        })
      )
      .subscribe(() => {
        this.form.reset();
        this.router.navigate(['/users']);
        this.isSubmitted = false;
      });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
