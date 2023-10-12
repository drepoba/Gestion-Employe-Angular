import { User } from "./user";



export class Personne extends User {


    constructor(
        public id: number,
        public firstName?: string,
        public lastName?: string,
        public dateOfBirth?: string,
        public posteActuel?: string
    ) {
        super(firstName, lastName);
    }

}
