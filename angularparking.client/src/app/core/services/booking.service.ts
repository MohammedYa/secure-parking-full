import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
AuthService
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient: HttpClient,private _AuthService:AuthService) { }
    

  bookspot(reqest:any):Observable<any>{
    
    return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/CreateApplicationForm`,reqest)
  }                               
                              

}