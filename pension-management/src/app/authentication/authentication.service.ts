import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Token } from "./token.model";
import { User } from "./user.model";


@Injectable({
    providedIn: 'root'
  })
export class AuthenticationService{

    constructor(private http:HttpClient) {  }


    login(user :User):Observable<Token>{
        return this.http.post<Token>("http://authenticationservice-lb-336564638.ap-south-1.elb.amazonaws.com/auth/login", user);
    }

}