import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.checkLoginStatus(); // Pastikan status login disinkronkan saat komponen dimuat
  }

  logout() {
    this.auth.signout();
    this.navigateToLogin();
  }

  private navigateToLogin() {
    this.router.navigate(['login']); // Arahkan kembali ke halaman login setelah logout
  }
}
