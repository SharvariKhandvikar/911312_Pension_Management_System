import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { AuthenticationService } from './authentication.service';
import { Token } from './token.model';
import { User } from './user.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  token!: Token ;

  constructor(public authenticationService: AuthenticationService, public router:Router, public tokenService: TokenService) { }

  ngOnInit(): void {
  }

  onSubmit(user: User){
    this.authenticationService.login(user).subscribe(data=>
      {
        this.token = data;
        this.tokenService.updateToken(this.token.token);      
        this.router.navigate(["/pensionportal"]);
      }
      );

     

  }

}
