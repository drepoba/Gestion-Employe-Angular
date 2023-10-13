import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private sessionStorage:StorageService,private router:Router){}

  onLogout(){
    this.sessionStorage.clean()
    this.router.navigate(['/login']);
   
  }
}
