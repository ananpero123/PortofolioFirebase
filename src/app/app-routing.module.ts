import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ReadPortofolioComponent } from './read-portofolio/read-portofolio.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'portofolio', component:PortofolioComponent},
  {path: 'read-portofolio', component:ReadPortofolioComponent},
  {path: 'read-portofolio/:id', component:ReadPortofolioComponent},
  {path: 'login', component:LoginComponent},
  { path: 'edit/:id', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
