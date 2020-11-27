import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css'],
})
export class FormSignUpComponent implements OnInit {
  formSignUp: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  signUpSubmit(): void {}
}
