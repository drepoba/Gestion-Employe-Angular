import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { homeGuard } from './home.guard';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './personne/list/list.component';
import { AddComponent } from './personne/add/add.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';

const routes: Routes = [
  {path:'', component:LoginComponent , canActivate: [loginGuard]},
  {path:'login',component:LoginComponent, canActivate: [loginGuard]},
  {path:'add-personne',component:AddComponent , canActivate: [homeGuard]},
  {path:'entreprise',component:EntrepriseComponent , canActivate: [homeGuard]},
  {path:'list-personne',component:ListComponent , canActivate: [homeGuard]},
  {path:'signup',component:SignupComponent , canActivate: [loginGuard]},
  {path:'home',component:HomeComponent , canActivate: [homeGuard]},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
