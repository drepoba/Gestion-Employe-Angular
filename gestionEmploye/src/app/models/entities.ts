export interface User {
    username: string
    password:string
    roles:Role[]
}

export interface Role {
    id: string
    name:string

}


export interface Entreprise {
    id:any
    companyName:string;
}

export interface Personne {
    id:any
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    posteActuel:string;
}

export interface PersonneEntreprise {
    id:any
    dateBegin:string;
    dateEnd:string;
    posteOccupe:string;
    entreprise:Entreprise;
    personne:Personne
}
