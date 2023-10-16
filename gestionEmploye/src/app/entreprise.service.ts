import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from './models/entities';
import { Observable } from 'rxjs';
import { environment } from './environments';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private url: string = '/personne'
  constructor(private http: HttpClient) {}

  getEntreprises(token: string): Observable<Entreprise[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Entreprise[]>(environment.springURL+"/api/entreprises/list",{ headers })
  }

  getEntreprisebyId(id: number,token: string): Observable<Entreprise> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Entreprise>(`${this.url}/${id}`,{ headers })
  }

  putEntreprise(entreprise: Entreprise , id: number): Observable<any> {
    return this.http.put<Observable<any>>(`${this.url}/${id}`,entreprise,)
  }

  deletentreprise(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.url}/${id}`)
  }
   

  // Cette fonction effectue un post en incluant le token dans les en-têtes
  postData(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(environment.springURL+"/api/entreprises/add", data, { headers });
  }
  
}

