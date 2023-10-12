import { Personne } from "./Personne";

export interface Role {
    id?: string
    name?:string

}


export class Entreprise {
    id?:any
    companyName?:string;
}

export interface PersonneEntreprise {
    id:any
    dateBegin:string;
    dateEnd:string;
    posteOccupe:string;
    entreprise:Entreprise;
    personne:Personne
}
