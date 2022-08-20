import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { TokenService } from '../token.service';
import { BankDetails } from './bank.model';
import { Pension } from './pension.model';
import { PensionService } from './pension.service';
import { Pensioner } from './pensioner.model';

@Component({
  selector: 'app-pension-portal',
  templateUrl: './pension-portal.component.html',
  styleUrls: ['./pension-portal.component.css']
})
export class PensionPortalComponent implements OnInit {
  token!: string;
  aadharNumber!: string;
  pensionDetails!: Pension;
  pensionerDetails!: Pensioner;
  bankDetails! : BankDetails;
  getpensiondetailclicked = false;
  getpensionerdetailsclicked = false;
  gotAuthorizationError = false;
  gotAadharError = false;
  addingPensioner = false;
  addpensionercliked = false;
  detailsSaved = false;
  bankAccountNumber! : string;
  bankType! : string;
  bankName!: string;
  name!: string;
  dob! : Date;
  panNumber!: string;
  salaryEarned! : number;
  allowances!:number;
  pensionType!: string;
  getban! : string;
  getbn! : string;
  getbt!: string;

  constructor(public tokenService: TokenService, public pensionService: PensionService, public router:Router) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
    this.pensionDetails = new Pension();
    this.pensionerDetails = new Pensioner();
    this.bankDetails = new BankDetails();
    this.pensionerDetails.bankDetails = new BankDetails();
  }

  onPensionClick(){
    this.getpensiondetailclicked = true;
    this.pensionService.processPensionDetails(this.aadharNumber, this.token).subscribe(data =>{
      this.pensionDetails = data;
    },
    err => {
      //console.log(err);
      this.handleError (err.message);
    });
  }

  onPensionerClick(){
    this.getpensionerdetailsclicked = true;
    this.pensionService.getPensionerDetails(this.aadharNumber, this.token).subscribe(data => {
      this.pensionerDetails= data;
      this.bankDetails = data.bankDetails;
      this.getban = data.bankDetails.accountNumber;
      this.getbn = data.bankDetails.bankName;
      this.getbt = data.bankDetails.bankType;
      console.log(data.bankDetails.bankName);
    },
    err => {
      //console.log(err);
      this.handleError (err.message);
    });
  }

  onSavePensionerClick(){
    this.addingPensioner = true;
  }

  addPensioner(){
    const pensioner= new Pensioner();
    const bd = new BankDetails();
    bd.setBankAccountNumber(this.bankAccountNumber);
    bd.setBankName(this.bankName);
    bd.setBankType(this.bankType);
    pensioner.adharNumber = this.aadharNumber;
    pensioner.bankDetails = bd;
    pensioner.name = this.name;
    pensioner.dob = this.dob;
    pensioner.panNumber = this.panNumber;
    pensioner.salaryEarned = this.salaryEarned;
    pensioner.allowances = this.allowances;
    pensioner.pensionType = this.pensionType;
    console.log(pensioner.bankDetails);
    console.log(pensioner);
    this.pensionService.savePensionerDetails(pensioner, this.token).subscribe(data => {
      //console.log(data);
      this.detailsSaved = true;
    },
    err => {
      //console.log(err);
      this.handleError (err.message);
    });
  }

  onCancel(){
    const issure = confirm("Are you sure!!!");
    if(issure){
    this.addingPensioner = false;
    }
  }

  handleError(msg: any){
    console.log(JSON.stringify(msg));
    const errMsg: string =  JSON.stringify(msg);
    if(errMsg.includes("Authorization")){
      this.gotAuthorizationError = true;
    }
    else if(errMsg.includes("500")){
      this.gotAadharError = true;
    }
    
  }

  tryAgain(){
    if(this.gotAadharError){
      this.gotAadharError = false;
    }
    if(this.gotAuthorizationError){
      this.gotAuthorizationError = false;
    }
  }

}
