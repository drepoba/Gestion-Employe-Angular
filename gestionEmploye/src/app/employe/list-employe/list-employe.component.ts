import { Component } from '@angular/core';
import { PersonneEntreprise } from 'src/app/models/entities';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent {
  listeEmploye: PersonneEntreprise[] = [];
  constructor(){
  }
  ngOnInit(): void {
  }

}
