import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments';
import { Personne } from '../models/Personne';
import { AuthRequest, User } from '../models/user';
import { RegistryService } from '../services/registry.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  p?:AuthRequest;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router:Router,private auth: AuthService,private storage: StorageService, private http:HttpClient,private registryService:RegistryService){}
  ngOnInit():void{

  }

  onSubmit(){
    if ((this.form.value["username"]=="" || this.form.value["password"]==null) ){
      throw new Error("Username and password not exist")
    }
    this.p= new AuthRequest(this.form.value["username"],this.form.value["password"]);
    
   console.log(this.p);
    this.auth.authenticate(this.p).subscribe({
     next: (data: any) => {
       // Traitement des données reçues
       console.log(data);
       this.storage.saveUser(data?.token)
       this.isLoginFailed = false;
       this.isLoggedIn = true;
       this.router.navigate(['/home']);
     }, error: err => {
       this.alertWithErreur();
       this.errorMessage = err.error.message;
       this.isLoginFailed = true;
     }
    })
   console.log(this.form?.value)
 }

 alertWithErreur(){
  Swal.fire('Erreur', 'login ou mot de passe incorrecte !', 'error')
}
 
}

