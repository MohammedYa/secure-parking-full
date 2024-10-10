import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmailService } from '../../core/services/email.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  loginForm!: FormGroup;
  //CTOR
  constructor ( private fb: FormBuilder,private router: Router ,private _AuthService: AuthService){}
  // Lifecycle hook that initializes the form when the component is created
  ngOnInit(): void {
    this.initForm()
  }
   // Method to initialize the form
  initForm():void{
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(form:any): void {
    
  let obj={
    userName:form.username,
    password:form.password
  }
  this._AuthService.loginPerson(obj).subscribe((res)=>{
    
    
        localStorage.setItem("userToken",res.token)
        this._AuthService.saveUserData()
        this.router.navigateByUrl('/Dashboard')
  })
  }
 
}
