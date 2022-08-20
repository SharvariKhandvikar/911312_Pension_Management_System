import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pension } from "./pension.model";
import { Pensioner } from "./pensioner.model";


@Injectable({
    providedIn: 'root'
  })
export class PensionService{
    constructor(private http:HttpClient){}

    processPensionDetails(adharNumber: string, header: string):Observable<Pension>{
        let headers = new HttpHeaders({
            'Authorization': header});
        let options = { headers: headers };
        return this.http.post<Pension>("http://process-pension-lb-1618756832.ap-south-1.elb.amazonaws.com/processpension/pensionDetails/"+adharNumber, undefined, options);
    }


    getPensionerDetails(adharNumber: string, header: string):Observable<Pensioner>{
        let headers = new HttpHeaders({
            'Authorization': header});
        let options = { headers: headers };
        return this.http.get<Pensioner>("http://pensioner-details-lb-1719596686.ap-south-1.elb.amazonaws.com/pensioner-details/pensionerdetails/"+adharNumber, options);
    }

    savePensionerDetails(pensionerDetails: Pensioner, header: string):Observable<Pensioner>{
        let headers = new HttpHeaders({
            'Authorization': header});
        let options = { headers: headers };
        return this.http.post<Pensioner>("http://pensioner-details-lb-1719596686.ap-south-1.elb.amazonaws.com/pensioner-details/save/pensionerdetails", pensionerDetails, options);
    }
}