import { Component } from '@angular/core';
import { Entreprise } from 'src/app/models/entities';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent {
  listeEmploye: Entreprise[] = [];
}
