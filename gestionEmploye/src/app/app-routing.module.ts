import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { homeGuard } from './guards/home.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:LoginComponent , canActivate: [loginGuard]},
  {path:'login',component:LoginComponent, canActivate: [loginGuard]},
  {path:'signup',component:SignupComponent , canActivate: [loginGuard]},
  {path:'home',component:HomeComponent , canActivate: [homeGuard]},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
