import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetrequestsService {
  status:boolean=true
  constructor(private _HttpClient: HttpClient,private _AuthService:AuthService) {
   
   }

  getRequests(skip:number,take:number,Status:number):Observable<any>{
    const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this._HttpClient.get(`${this._AuthService.BaseUrl}/api/ApplicationFormData/GetAllApplicationForm?skip=${skip}&take=${take}&Status=${Status}`,{headers})
  } 



 getReqestById(Id:any):Observable<any>{
  const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this._HttpClient.get(`${this._AuthService.BaseUrl}/api/ApplicationFormData/GetApplicationFormById/${Id}`,{headers})
}
getstatises(status:any):Observable<any>{
  const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this._HttpClient.get(`${this._AuthService.BaseUrl}/api/ApplicationFormData/GetStatiscs?Status=${status}`,{headers})
}
getAllstatises():Observable<any>{
  const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this._HttpClient.get(`${this._AuthService.BaseUrl}/api/ApplicationFormData/GetStatiscs`,{headers})
}

actionApplication(reqest:any):Observable<any>{
  const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  }); 
  return this._HttpClient.post(`${this._AuthService.BaseUrl}/api/ApplicationFormData/CreateApplicationFormAction`,reqest,{headers})
} 

}
