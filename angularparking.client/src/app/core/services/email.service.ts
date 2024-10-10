import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetrequestsService } from './getrequests.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private _HttpClient: HttpClient) {}
  sendFormData(formData: any){
    return this._HttpClient.post("https://sendmail-api-docs.vercel.app/api/send", formData);
  }
  sendHireData(formData: any){
    return this._HttpClient.post("https://sendmail-api-docs.vercel.app/api/send", formData);
  }
}
