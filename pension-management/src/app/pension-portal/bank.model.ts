export class BankDetails{
    
    public accountNumber!: string; public bankName!: string; public bankType!: string;

    constructor(){}

    setBankAccountNumber(ban:string){
        this.accountNumber =  ban;
    }

    setBankName(n:string){
        this.bankName = n;
    }

    setBankType(t:string){
        this.bankType = t;
    }

}