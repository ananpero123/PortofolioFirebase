import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = 'password';
  isText: boolean = false;
  eyeicon: string = 'fa-eye-slash';
  loginform!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  OnLogin() {
    if (this.loginform.valid) {
      this.auth.login(this.loginform.value).subscribe({
        next: (resp) => {
          alert('Login berhasil!');
          this.loginform.reset();
          this.auth.storeusername(resp.username);
          this.auth.checkLoginStatus(); 
          this.router.navigate(['home']);
        },
        error: (err) => {
          alert('Login gagal. Periksa kembali username dan password Anda.');
        },
      });
    } else {
      // Tindakan tambahan jika form login tidak valid, jika diperlukan
    }
  }
}
