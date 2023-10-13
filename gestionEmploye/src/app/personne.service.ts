import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from './models/Personne';
import { environment } from '../app/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private url: string = '/personne'
  constructor(private http: HttpClient) {}

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.url) ;
  }

  getPersonnebyId(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.url}/${id}`)
  }

  postPersone(persone: Personne): Observable<any> {
    return this.http.post<Observable<any>>(`${this.url}`,persone)
  }

  putPersonne(personne: Personne , id: number): Observable<any> {
    return this.http.put<Observable<any>>(`${this.url}/${id}`,personne)
  }

  deletePersonne(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.url}/${id}`)
  }
   

  // Cette fonction effectue un post en incluant le token dans les en-têtes
  postData(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(environment.springURL+"/api/personnes/add", data, { headers });
  }

   // Cette fonction effectue un post en incluant le token dans les en-têtes
   listData( token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(environment.springURL+"/api/personnes/all-persons-emplois", { headers });
  }
  
}
