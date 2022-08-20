import { Component, Input, OnInit } from '@angular/core';
import { Pension } from '../pension.model';

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {

  @Input()
  pensionDetails!: Pension;

  saved = false;
  constructor() { }

  ngOnInit(): void {
    if(this.pensionDetails.pensionAmount != 0){
      this.saved = true;
    }
  }



}
