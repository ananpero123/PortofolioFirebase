import { AngularFireModule } from '@angular/fire/compat';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ReadPortofolioComponent } from './read-portofolio/read-portofolio.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortofolioComponent,
    ReadPortofolioComponent,
    LoginComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAkwGjKPdhoQfoj6w_rhlu5AvSnxcrVE1Q',
      authDomain: 'portofolio-1d5b1.firebaseapp.com',
      projectId: 'portofolio-1d5b1',
      storageBucket: 'portofolio-1d5b1.appspot.com',
      messagingSenderId: '188776484034',
      appId: '1:188776484034:web:17d0c66d9033a9be78bf5b',
      measurementId: 'G-KJ0V9BM71R',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
