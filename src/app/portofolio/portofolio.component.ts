import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, collection, addDoc,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  userData!: Observable<any>;
  form!: FormGroup;
  IsLoggingIn: boolean = false;

  constructor(private firestore:Firestore, private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router){
    this.getData();
  }

  getData(){
    const colectionInstance = collection(this.firestore, 'portofolio')
    collectionData(colectionInstance, {idField: 'id'}).subscribe(val => {
      console.log(val);
    })

    this.userData = collectionData(colectionInstance, {idField: 'id'});
  }

  ngOnInit(): void {
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





