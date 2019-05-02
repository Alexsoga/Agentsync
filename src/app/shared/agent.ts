export interface Roles {
    user?: boolean;
    agent?: boolean;
    admin?: boolean;
}
export interface Agent {
   uid: string;
   name: string;
   sex:string;
   dob:number;
   skills:string[];
   email: string;
   phonenumber: string;
   street:string;
   city:string;
   state:string;
   zipcode:number;
   account?: string;
   roles: Roles; 
}
