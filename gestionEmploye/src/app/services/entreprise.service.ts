import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable, of, Subject} from "rxjs";
import {environment} from "../../app/environments";
import {Entreprise} from "../models/entities";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
// observables sources
  private entrepriseCreerSource = new Subject<Entreprise>();
  private entrepriseModifSource = new Subject<Entreprise>();
  private entrepriseFiltreSource = new Subject<string>();
  private entrepriseSupprimeSource = new Subject<boolean>();


// observables streams
  entrepriseCreer$ = this.entrepriseCreerSource.asObservable();
  entrepriseModif$ = this.entrepriseModifSource.asObservable();
  entrepriseFiltre$ = this.entrepriseFiltreSource.asObservable();
  entrepriseSupprime$ = this.entrepriseSupprimeSource.asObservable();

  constructor(private  http: HttpClient) {
  }

  getAllEntreprise(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${environment.springURL}/api/entreprise`);
  }

  ajoutEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    console.log('methode du service qui ajoute  entreprise', entreprise);
    return this.http.post<Entreprise>(`${environment.springURL}/api/entreprise`, entreprise);
  }
  modifEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    console.log('methode du service qui modifier categorie', entreprise);
    return this.http.put<Entreprise>(`${environment.springURL}/api/entreprise`, entreprise);
  }
  getEntrepriseById(id: Entreprise): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${environment.springURL}/api/entreprise/${id}`);
  }
  supprimerEntreprise(id: number): Observable<any> {
    return this.http.delete(`${environment.springURL}/api/entreprise/${id}`);

  }
}
