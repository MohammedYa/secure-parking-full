import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetrequestsService } from '../../core/services/getrequests.service';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-reqest-details',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './reqest-details.component.html',
  styleUrl: './reqest-details.component.css'
})
export class ReqestDetailsComponent  implements OnInit {
personalInfoId: any;
reqest:any
truckOrTailer:boolean=true
stateorprovince:boolean=true
status:any=true
constructor(private route: ActivatedRoute,private _GetrequestsService: GetrequestsService,private _Router:Router) {


}
ngOnInit(): void {

  this.personalInfoId = this.route.snapshot.paramMap.get('id');
  this.getReqestsDetails(this.personalInfoId)
  
  
  
  
}
getReqestsDetails(Id:number){
this._GetrequestsService.getReqestById(Id).subscribe((res)=>{
this.reqest=res
if(this.reqest.status=="Pending"){
    this.status=true
  }
  else{
    this.status=false

  }
if(res.moveInInfo.truckOrTrailers==1){
  this.truckOrTailer=true
}
else{
  this.truckOrTailer=false
}
if(this.reqest.moveInInfo.stateOrProvince=="true"){
  this.stateorprovince=true
}
else{
  this.stateorprovince=false

}
  
})
}

actionApp(id:number,status:number){
  let obj={
    id: id,
    status: status
  }
  
this._GetrequestsService.actionApplication(obj).subscribe((res)=>{
  console.log(res);
  if(res.isSuccess){
    this._Router.navigate(["/Dashboard/AllApplication"])

  }
},
(er)=>{
  console.log(er);
  
}
)
}
}
