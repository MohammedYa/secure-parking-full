import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetrequestsService } from '../../core/services/getrequests.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { AllRequestsComponent } from './all-requests/all-requests.component';

@Component({

  selector: 'app-dashboard-home',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet,AllRequestsComponent],
  templateUrl:'./dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
allcount:number=500
  rejectcount: any;
  acceptcount: any;
  pindcount: any;
constructor(private _AuthService: AuthService,private _GetrequestsService:GetrequestsService) {
  this.getAll()
  this.getAccept()
  this.getPind()
  this.getRegect()
}
getAll(){
  this._GetrequestsService.getAllstatises().subscribe((res)=>{
    
   this.allcount=res.count
  })
}
getPind(){
  this._GetrequestsService.getstatises(0).subscribe((res)=>{
   this.pindcount=res.count
  })
}
getAccept(){
  this._GetrequestsService.getstatises(1).subscribe((res)=>{
   this.acceptcount=res.count
  })
}
getRegect(){
  this._GetrequestsService.getstatises(2).subscribe((res)=>{
    
   this.rejectcount=res.count
  })
}
logOut(){
  this._AuthService.LogOut()
}
}
