export interface IUser {
    picture:{
        larg:string,
        medium:string,
        thumbnail:string   
    } 
    name:{
            first: string
            last:string
        }  
    email: string;  
    gender:string; 
    isFilter:boolean; 
  }