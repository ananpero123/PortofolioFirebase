import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7288/api/Login/";
  isLoggedIn: boolean = false; // Variabel untuk menyimpan status login

  constructor(private http: HttpClient, private router: Router) { }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authentication`, loginObj);
  }

  storeusername(usernamevalue: string) {
    localStorage.setItem('username', usernamevalue);
    this.isLoggedIn = true; // Pastikan isLoggedIn diatur ke true setelah login berhasil
  }

  getToken() {
    return localStorage.getItem('username');
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('username'); // Memeriksa apakah token username ada di local storage
  }

  signout() {
    localStorage.clear();
    this.isLoggedIn = false; // Setel isLoggedIn ke false setelah logout berhasil
    this.router.navigate(['login']); // Arahkan kembali ke halaman login setelah logout
  }
}
