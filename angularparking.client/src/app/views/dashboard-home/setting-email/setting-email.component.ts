import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-setting-email',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './setting-email.component.html',
  styleUrls: ['./setting-email.component.css']
})
export class SettingEmailComponent {
 error:string=" New password and Confirm Password Not Match"
 er:boolean=false
  constructor(private _AuthService:AuthService) {
   
  }
  changePassForm: FormGroup = new FormGroup({
    // PersonalInfo  Information
    
    // 'userName': new FormControl(null, [ Validators.required]),
    'Password': new FormControl(null, [ Validators.required]),
    'RePassword': new FormControl(null, [ Validators.required]),
  })
  onSubmit(formValue:any){
    
    let obj ={
      password: formValue.Password,
      confirmPassword: formValue.RePassword
    }
    
    this._AuthService.changePassword(obj).subscribe((res)=>{
      if(res.isSuccess){
        this.changePassForm.reset()
        this._AuthService.LogOut()
      }
      // 
    },
    (er)=>{
     if (er.error.isSuccess==false){
       this.er=true
      }
    }
 
  )

  }
}
