import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddComponent } from './personne/add/add.component';
import { ListComponent } from './personne/list/list.component';
import { AffectationEmploiComponent } from './employe/affectation-emploi/affectation-emploi.component';
import { ListEmployeComponent } from './employe/list-employe/list-employe.component';
import { ListEntrepriseComponent } from './entreprise/list-entreprise/list-entreprise.component';
import { AffectationPersonneEmploiComponent } from './personne/affectation-personne-emploi/affectation-personne-emploi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    SignupComponent,
    EntrepriseComponent,
    AddComponent,
    ListComponent,
    AffectationEmploiComponent,
    ListEmployeComponent,
    ListEntrepriseComponent,
    AffectationPersonneEmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
