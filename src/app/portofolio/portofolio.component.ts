
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';


@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortofolioComponent implements OnInit {

  form!: FormGroup;
  IsLoggingIn: boolean = false;


  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe((loggedIn) => {
      this.IsLoggingIn = !loggedIn;
    });

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logout() {
    this.authenticationService.Logout();
  }

  login() {
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
