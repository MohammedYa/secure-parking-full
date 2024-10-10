import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SendimgService {

  constructor(private _HttpClient: HttpClient,private _AuthService:AuthService) { }
  SendArticleOfIncorporation(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${environment.api}/api/ApplicationFormData/ArticleOfIncorporation`,reqest)
  }  
  sendCompanyOwnersDriverLicense(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${environment.api}/api/ApplicationFormData/CompanyOwnersDriverLicense`,reqest)
  }  
  sendCertificateOfInsurance(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${environment.api}/api/ApplicationFormData/CertificateOfInsurance`,reqest)
  }  
  sendCertifiedPayment(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${environment.api}/api/ApplicationFormData/CertifiedPayment`,reqest)
  }  
  sendPostdatedChecks(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${environment.api}/api/ApplicationFormData/PostdatedChecks`,reqest)
  }  
}
