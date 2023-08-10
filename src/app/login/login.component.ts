import { AuthenticationService } from './../Service/authentication.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  IsLoggingIn = false;

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.IsLoggingIn = true;

    this.authenticationService
      .Login({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe(
        () => {
          alert('Login Berhasil ^-^');
          this.router.navigate(['home']);

        },
        (error: any) => {
          alert('Login gagal x-x');
        }
      );
  }
}
