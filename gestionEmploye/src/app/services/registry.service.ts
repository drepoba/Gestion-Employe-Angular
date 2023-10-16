import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from "../models/Personne";
import { Observable } from 'rxjs';
import { environment } from '../environments';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private httpClient: HttpClient) {

   }
 
   signUp(personne:Personne): Observable<any> {
    console.log('methode du service qui ajoute un employe', personne);
    return this.httpClient.post<any>(`${environment.springURL}/api/user/sign-up`,personne); 
  }

  login(user: User) {
    return this.httpClient.post<any>(`${environment.springURL}/api/user/sign-in`, user);
  }
  
}
