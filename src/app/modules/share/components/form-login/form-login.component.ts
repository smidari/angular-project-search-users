import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './validators/my-validators';
import { UsersService } from '../../../../users.service';
import { Router } from '@angular/router';
import { UserForLogin } from '../../../../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
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
    const user: UserForLogin = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.userService.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/users']);
        this.isSubmitted = false;
      },
      (error) => (this.isSubmitted = false)
    );
  }
}
