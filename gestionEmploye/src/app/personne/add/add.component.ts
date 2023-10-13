import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/personne.service';
import { StorageService } from 'src/app/services/storage.service';
declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  person: any = {};
  tokenUser?:string;


  constructor(private personneService:PersonneService,private storageService:StorageService,private router:Router){

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    
    const token = this.tokenUser;

    this.personneService.postData(this.person, this.storageService.getUser())
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
