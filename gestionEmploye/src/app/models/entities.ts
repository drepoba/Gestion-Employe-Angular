import { Personne } from "./Personne";

export interface Role {
    id?: string
    name?:string

}


export class Entreprise {
    id?:number
    companyname?:string;
}

export class PersonneEntreprise {
    id:any
    dateBegin?:string;
    dateEnd?:string;
    posteOccupe?:string;
    entreprise?:Entreprise;
    personne?:Personne
}
