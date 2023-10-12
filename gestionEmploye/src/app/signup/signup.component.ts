import { Component } from '@angular/core';
import { User} from '../models/user';
import { Personne } from "../models/Personne";
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { RegistryService } from '../services/registry.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  p?:User;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });





  constructor( private router:Router,private fb:FormBuilder,private registryService:RegistryService){}
  ngOnInit():void{
   
  }

  onRegister():void{
   
  }


  onSubmit(){
    
     this.p= new User(this.form.value["username"],this.form.value["password"]);
     this.registryService.signUp(this.p).subscribe({
      next: (data: any) => {
        // Traitement des données reçues
        this.router.navigate(['/login']);
      },
      error: (erreur: any) => {
        // Gestion des erreurs
      alert(erreur.message || JSON.stringify(erreur))
      },
      complete: () => {
        // Actions à exécuter après la complétion de l'observable (facultatif)
      }
     })
    console.log(this.form?.value)
  }

}
