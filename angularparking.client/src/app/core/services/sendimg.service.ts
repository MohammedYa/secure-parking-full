import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendimgService {

  constructor(private _HttpClient: HttpClient,private _AuthService:AuthService) { }
  SendArticleOfIncorporation(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/ArticleOfIncorporation`,reqest)
  }  
  sendCompanyOwnersDriverLicense(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/CompanyOwnersDriverLicense`,reqest)
  }  
  sendCertificateOfInsurance(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/CertificateOfInsurance`,reqest)
  }  
  sendCertifiedPayment(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/CertifiedPayment`,reqest)
  }  
  sendPostdatedChecks(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/PostdatedChecks`,reqest)
  }  
}
