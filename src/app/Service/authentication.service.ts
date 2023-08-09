import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  Login(params: login): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(params.email, params.password)).pipe(
      tap(() => {
        this.isLoggedInSubject.next(true); // Mengirim sinyal bahwa pengguna sudah login
      })
    );
  }

  Logout() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['login']);
      this.isLoggedInSubject.next(false); // Mengirim sinyal bahwa pengguna sudah logout
      localStorage.removeItem('user');
    });
  }
}

type login = {
  email: string;
  password: string;
}
