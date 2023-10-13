import { Component } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { PersonneService } from 'src/app/personne.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listePersonne: Personne[] = [];

  constructor(private perService: PersonneService) {
  }

  ngOnInit(): void {
    //  this.perService.getPersonnes().pipe(
    //  )
    // appele la methode getPersonne() et souscris à l'observable en initiant le tableau listePersonne
  }
}
