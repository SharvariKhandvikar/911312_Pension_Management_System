import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class TokenService{
    
    private token!:string;
    constructor( ){}

    updateToken(tokenNew: string){
        this.token = tokenNew;
    }

    getToken():string{
        return this.token;
    }

}