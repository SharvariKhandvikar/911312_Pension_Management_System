import { BankDetails } from "./bank.model";

export class Pensioner {
    
   
    public adharNumber!: string; public name!: string; public dob!: Date; public panNumber!: string;
    public salaryEarned!: number; public allowances!: number; public pensionType!: string; 
    public bankDetails!: BankDetails;

    constructor(){};

        setAadharNumber(an: string){
            this.adharNumber = an;
        }

        setNname(n:string){
            this.name = n;
        }

        setdateofbirth(date: Date){
            this.dob = date;
        }

        setpaanNumver(p : string){
            this.panNumber = p;
        }
        setsalEard(se: number){
            this.salaryEarned = se;
        }

        setallow(a: number){
            this.allowances = a;
        }

        setType(pt:string){
            this.pensionType = pt;
        }

        setBankDetail(bd: BankDetails){
            this.bankDetails = bd;
        }
    
}