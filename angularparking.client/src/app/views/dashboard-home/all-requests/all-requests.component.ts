import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { GetrequestsService } from '../../../core/services/getrequests.service';

@Component({

  selector: 'app-all-requests',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css','../dashboard-home.component.css']
})
export class AllRequestsComponent {
requests:any=[]
pageNumber:number=1
id:any
skip:number=0
take:number=10
Status:number=0
count:number=0
pages=1
ExtraItem=0
constructor(private _GetrequestsService: GetrequestsService,private _AuthService: AuthService) {
  this.getRequests(0,10,0)
}

changePageNumber(element:any){
  this.pageNumber=element.target.innerHTML
  this.getRequests((this.pageNumber-1)*10,10,0)

  
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



getRequests(skip:number,take:number,Status:number){
  this._GetrequestsService.getRequests(skip,take,Status).subscribe((res)=>{
    this.requests=(res.data)
    this.count=res.count
 
  
    this.pages = Math.floor(this.count / 10); // أقرب عدد صحيح (التقريب لأسفل)
    if(this.count%10!=0){
      this.pages ++
    }
    
    
  })
}
}
