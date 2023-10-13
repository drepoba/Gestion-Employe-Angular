import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import {  Router } from '@angular/router';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listePersonne: Personne[] = [];
  constructor(private sessionStorage:StorageService,private router:Router){}
  getAttributes(){}

  onLogout(){
    this.sessionStorage.clean()
    this.router.navigate(['/login']);
   
  }

  ngOnInit(): void {
  }
}
