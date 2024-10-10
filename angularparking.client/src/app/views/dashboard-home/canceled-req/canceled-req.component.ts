import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { GetrequestsService } from '../../../core/services/getrequests.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-canceled-req',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './canceled-req.component.html',
  styleUrls: ['./canceled-req.component.css','../dashboard-home.component.css']
})
export class CanceledReqComponent {
  requests:any=[]
  pageNumber:number=1
  id:any
  skip:number=0
  take:number=10
  Status:number=2
  count:number=0
  pages=1
  ExtraItem=0
  constructor(private _GetrequestsService: GetrequestsService,private _AuthService: AuthService) {
    this.getRequests(0,10,2)
  }
  getRequests(skip:any=0,take:any=10,status:any=2){
    this._GetrequestsService.getRequests(skip,take,status).subscribe((res)=>{
     this.requests=(res.data) 
      
     this.count=res.count
 
  
     this.pages = Math.floor(this.count / 10); // أقرب عدد صحيح (التقريب لأسفل)
     if(this.count%10!=0){
       this.pages ++
     }
    })
  }
  changePageNumber(element:any){
    this.pageNumber=element.target.innerHTML
  if(this.pageNumber<=this.pages){
   this.getRequests((this.pageNumber-1)*10,10,0)

  } 
}
  prviousPageNumber(){
    if (this.pageNumber >1) {
      // Increment page number and calculate the new skip value
      this.pageNumber--;
      this.skip = (this.pageNumber - 1) * this.take; // Calculate the new skip value
    } 
    else if(this.pageNumber==1){
      this.pageNumber=this.pages
      this.skip = (this.pageNumber - 1) * this.take; // Calculate the new skip value
  
    }
    this.getRequests(this.skip, this.take, this.Status);
  }
  NextPageNumber() {
    if (this.pageNumber < this.pages) {
      // Increment page number and calculate the new skip value
      this.pageNumber++;
      this.skip = (this.pageNumber - 1) * this.take; // Calculate the new skip value
    } 
    else if (this.pageNumber >= this.pages) {
      // Reset page number and skip when pageNumber exceeds the total pages
      this.pageNumber = 1;
      this.skip = 0;
    }
  
    // Fetch requests with the updated pageNumber and skip value
    this.getRequests(this.skip, this.take, this.Status);
  }
  
}
