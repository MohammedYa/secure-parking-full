import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmailService } from '../../../core/services/email.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-body',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './contact-body.component.html',
  styleUrl: './contact-body.component.css'
})
export class ContactBodyComponent implements OnInit {
  selectedServeces:any[] = [];
  xServices:string = '';
  requestMessage!:FormGroup;
  apllyMessage!:FormGroup;

  constructor (private _EmailService:EmailService,private _FormBuilder:FormBuilder,private _Router:Router){}
  createForm():void{
    this.requestMessage=this._FormBuilder.group({
      FullName:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      PhoneNumber:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      CompanyName:['', [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      Address:['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      Email:['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(8)]],
     
    })
  }
  HireForm():void{
    this.apllyMessage=this._FormBuilder.group({
      FullName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      telephone:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      Address:['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      Email:['', [Validators.required, Validators.email]],     
      hiringFor:['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      years:['', [Validators.required, Validators.min(2), Validators.max(10)]],
     
    })
  }
  submitForm(){
    console.log(this.requestMessage);
    
    this.xServices = this.selectedServeces.filter(x => x.isChecked == true).map(x => x.label).join(", ").toString();
    const formData =JSON.stringify({
      to: "Info@secureparkingsolution.ca",
      subject: "New Message",
      message:"<strong>FullName:</strong> "+this.requestMessage.get("FullName")?.value
              +"<br>"+"<strong>Phone Number:</strong> "+this.requestMessage.get("PhoneNumber")?.value+"<br>"+
              "<strong>Company Name:</strong> "+this.requestMessage.get("CompanyName")?.value+"<br>"+
              "<strong>Address:</strong> "+this.requestMessage.get("Address")?.value+ "<br>"+
              "<strong>E-mail:</strong> "+this.requestMessage.get("Email")?.value+ "<br>"+
              "<strong>Message:</strong> "+this.requestMessage.get("message")?.value+"<br>"
              
              
}) ;
      this._EmailService.sendFormData(formData).subscribe({
        next(response){
          
        }
        
      })
      this.requestMessage.reset()
  }
  submitApplyForm(){
  this.xServices = this.selectedServeces.filter(x => x.isChecked == true).map(x => x.label).join(", ").toString();
  const formData =JSON.stringify({
    to: "securepsolutions@gmail.com",
    subject: "Hiring Massege",
    message:"<strong>FullName:</strong> "+this.apllyMessage.get("FullName")?.value
              +"<br>"+"<strong>Phone Number:</strong> "+this.apllyMessage.get("telephone")?.value+"<br>"+
              "<strong>Address:</strong> "+this.apllyMessage.get("Address")?.value+ "<br>"+
              "<strong>E-mail:</strong> "+this.apllyMessage.get("Email")?.value+ "<br>"+
              "<strong>Job Tittle:</strong> "+this.apllyMessage.get("hiringFor")?.value+"<br>"+
              "<strong>Years Of Experience:</strong> "+this.apllyMessage.get("years")?.value+"<br>"
            
  }) ;
    this._EmailService.sendHireData(formData).subscribe({
      next(response){
        
      }
      
    })
    this.apllyMessage.reset()
  }
   ngOnInit(): void {
    this.createForm()
    this.HireForm()
  } 
   bookServices(){
    this._Router.navigate(['/request'])
   } 
  }
