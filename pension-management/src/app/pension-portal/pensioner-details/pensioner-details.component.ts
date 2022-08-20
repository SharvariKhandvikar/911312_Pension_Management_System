import { Component, Input, OnInit } from '@angular/core';
import { BankDetails } from '../bank.model';
import { Pensioner } from '../pensioner.model';

@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
  styleUrls: ['./pensioner-details.component.css']
})
export class PensionerDetailsComponent implements OnInit {

  @Input()
  pensionerDetails!: Pensioner;

  ngOnInit(): void {
  
  }

}
