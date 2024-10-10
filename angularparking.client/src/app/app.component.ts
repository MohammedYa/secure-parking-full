import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/layout/default-layout/navbar/navbar.component";
import { FooterComponent } from "./shared/layout/default-layout/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'secure-parking';
  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.router.events.subscribe((evt)=>{
      if(!(evt instanceof NavigationEnd)){
        return
      }
    })
  }
}
