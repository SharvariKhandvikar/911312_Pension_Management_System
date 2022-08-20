import { BankDetails } from "./bank.model";

export class Pension {
constructor(){}

    public adharNumber!: string; public name!: string; public dob!: Date; public panNumber!: string;
        public salaryEarned!: number; public allowances!: number; public pensionType!: string; 
        public bankDetails!: BankDetails; public pensionAmount!: number; public bankServiceCharge!: number;
}