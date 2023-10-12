import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../environments';
import { Personne } from "../models/Personne";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 /* private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private helper: JwtHelperService) {
    var currentUser=localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  login(personne: Personne) {
    return this.http.post<Observable<any>>(`${environment.springURL}/api/user/sign-in`, personne)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isUserLoggedIn.next(false);
  }

*/
  constructor(private httpClient : HttpClient) { }

  authenticate(personne: Personne) {
    return this.httpClient.post<Observable<any>>(`${environment.springURL}/api/user/sign-in`, personne)
      .pipe(
        map(userData => {
          // let tokenStr = "Bearer " + userData.token;
          // sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
