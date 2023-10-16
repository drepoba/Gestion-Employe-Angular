import { Component } from '@angular/core';
import { EntrepriseService } from 'src/app/entreprise.service';
import { Entreprise } from 'src/app/models/entities';
import { PersonneService } from 'src/app/personne.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-affectation-personne-emploi',
  templateUrl: './affectation-personne-emploi.component.html',
  styleUrls: ['./affectation-personne-emploi.component.css']
})
export class AffectationPersonneEmploiComponent {
  employe=[]
  entreprises:any=[];
  personnes:any=[];
  personneEntreprise: any = {};
  entrepriseSelect:any={};
  personneSelect:any={};
  constructor(private entrepriseService:EntrepriseService,private storageService:StorageService,private personneService:PersonneService){

  }

  ngOnInit(){
    this.getListEntreprise();
    this.getListPersonnes();
  }

  confirmSave(){
    console.log(this.personneEntreprise);
  }

  getListEntreprise(){
    this.entrepriseService.getEntreprises(this.storageService.getUser()).subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
        console.log(data);
      },
      (erreur: any) => {
        // Gestion des erreurs
        console.log(erreur);
      }
    );
  }

  getListPersonnes(){
    this.personneService.getPersonnes(this.storageService.getUser()).subscribe(
      (data: any[]) => {
        this.personnes = data;
        console.log(data);
      },
      (erreur: any) => {
        // Gestion des erreurs
        console.log(erreur);
      }
    );
  }
}
