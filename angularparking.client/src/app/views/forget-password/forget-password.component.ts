import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,ButtonModule, StepperModule,InputOtpModule,FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  value: any;

  ForgetPassForm: FormGroup = new FormGroup({
    
    'email': new FormControl(null, [ Validators.required]),
    'NewPassword': new FormControl(null, [ Validators.required]),
  })
  onSubmit(formValue:any){
    console.log(formValue);
    

  }
  code(){
    console.log(this.value);
    
  }
}
