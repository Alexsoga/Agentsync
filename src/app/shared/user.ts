export interface Roles{
    user?:boolean;
    agent?:boolean;
    admin?:boolean;
}
export interface User {
    uid?:string;
    displayName:string;
    brokerage:string;
    email:string;
    phonenumber:string;
    account?:string;        
    photoURL?:string;
    roles:Roles;
    // url:string;
    admin?:boolean;
}

 
