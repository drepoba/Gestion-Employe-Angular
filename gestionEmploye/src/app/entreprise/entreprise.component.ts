import { Component } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
declare var $: any;
import Swal from 'sweetalert2';
import { Entreprise } from '../models/entities';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent {
  entreprise: Entreprise=new Entreprise();
  tokenUser?:string;


  constructor(private entrepriseService:EntrepriseService,private storageService:StorageService,private router:Router){

  }

  ngOnInit(): void {
    this.entreprise = {
      id: 0,
      companyname: ''
    }
  }

 

  onSubmit() {
    
    const token = this.tokenUser;

    this.entrepriseService.postData(this.entreprise, this.storageService.getUser())
    .subscribe({
      next: (data: any) => {
       this.alertWithSuccess()
      this.router.navigate(['/home']);
      },
      error: (erreur: any) => {
        // Gestion des erreurs
       console.log(erreur)
      },
      complete: () => {
        this.router.navigate(['/home']);
      }
  });
  }

  alertWithSuccess(){
    Swal.fire('Succes', 'Personne enrégistré avec succès !', 'success')
  }
}

