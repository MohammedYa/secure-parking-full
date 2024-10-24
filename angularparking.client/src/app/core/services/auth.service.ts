import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
UserData=new BehaviorSubject(null);
constructor(private _HttpClient:HttpClient,private _Router:Router) {
if(localStorage.getItem("UserToken")!=null){
this.saveUserData()

}
}
loginPerson(userData:any):Observable<any>{
return this._HttpClient.post(`${environment.api}/api/Login`,userData)
}
changePassword(obj: any): Observable<any> {
  
  const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });


  return this._HttpClient.post(`${environment.api}/api/ChangePassword`, obj, { headers });
}

saveUserData(){
let encodedToken=localStorage.getItem("userToken")
let decodedToken:any=jwtDecode(<string>encodedToken)
this.UserData.next(decodedToken)   

}
LogOut(){

localStorage.removeItem("userToken")
this.UserData.next(null)
this._Router.navigate(["/home"])

}

}
