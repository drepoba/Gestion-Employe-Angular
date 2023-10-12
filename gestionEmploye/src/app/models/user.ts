export class User {
    
    constructor(
        public username?: string,
        public password?:string,
       //public roles?:Role[]
        ){

    }
}

export class AuthRequest{
    constructor(
        public username?: string,
        public password?: string,
        
    ) {
       
    }
}