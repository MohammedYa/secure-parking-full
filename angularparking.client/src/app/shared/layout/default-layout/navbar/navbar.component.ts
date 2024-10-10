import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
declare var $ :any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  private resizeListener!: () => void;
Status:boolean=false
  constructor(private router: Router ,private _AuthService: AuthService) {}
Auth(){
  
if(this._AuthService.UserData.getValue()==null){
  this.router.navigateByUrl('/Login')

}
else{
      this.router.navigateByUrl('/Dashboard')

}
}
ngOnInit(): void {
  $(window).on('resize', () => {
    let width = $(window).width();
    if (width >= 360 && width <= 992) {
      this.Status=false

    } else {
      this.Status=false

    }
  
  });
} 

change(){
  if(this.Status==false){
    this.Status=true

  }else{
    this.Status=false

  }
}
changetabStatus(){        

  this.Status=false
 
}
}