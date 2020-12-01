import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../validators/my-validators';
import { UsersService } from '../../../../users.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css'],
})
export class FormSignInComponent implements OnInit {
  form: FormGroup;
  constructor(private userService: UsersService) {}

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
    console.log(this.form);
    this.form.reset();
  }
}
