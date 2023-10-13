import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/Personne';
import { PersonneService } from 'src/app/personne.service';
import { StorageService } from 'src/app/services/storage.service';
declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listePersonne: Personne[] = [];
  tokenUser?:string;


  constructor(private personneService:PersonneService,private storageService:StorageService,private router:Router){}

  ngOnInit(): void {
    //  this.perService.getPersonnes().pipe(
    //  )
    // appele la methode getPersonne() et souscris à l'observable en initiant le tableau listePersonne
    this.listPersonnes();
  }

  listPersonnes() {
    
    const token = this.tokenUser;

    this.personneService.listData(this.storageService.getUser())
    .subscribe({
      next: (data: any) => {
        this.listePersonne=data;
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
