import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-details',
  templateUrl: './error-details.component.html',
  styleUrls: ['./error-details.component.css']
})
export class ErrorDetailsComponent implements OnInit {

  @Input()
  gotAadharError = false; 

  @Input()
  gotAuthorizationError =  false;

  constructor() { }

  ngOnInit(): void {
  }

 

}
