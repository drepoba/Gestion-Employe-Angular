import { Component } from '@angular/core';
import { User} from '../models/user';
import { Personne } from "../models/Personne";
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { RegistryService } from '../services/registry.service';
declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  personne:Personne=new Personne;
  user:User=new User;


  constructor( private router:Router,private fb:FormBuilder,private registryService:RegistryService){}
  ngOnInit():void{
    this.user={
      password:'',
      username:''
    }
  
    this.personne = {
      id: 0,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      posteActuel: '',
      user: {
        password: this.user.password,
        username: this.user.username
      }
    }
  }

  alertWithSuccess() {
    Swal.fire('Inscription', 'Inscription effectuée !', 'success')
      .then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          this.router.navigate(['/login']);
        }
      });
  }


  onRegister(){
     this.personne.user=this.user;
     this.registryService.signUp(this.personne).subscribe({
      next: (data: any) => {
       this.alertWithSuccess()
      },
      error: (erreur: any) => {
        // Gestion des erreurs
       console.log(erreur)
      },
      complete: () => {
        // Actions à exécuter après la complétion de l'observable (facultatif)
      }
     })
  //  console.log(this.form?.value)
  }
  
}
