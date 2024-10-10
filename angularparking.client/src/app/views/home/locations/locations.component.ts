import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel'; // Import PrimeNG CarouselModule
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule,RouterLink],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit{
  products:any=[
    {
      src:"assets/images/park1.jpg",
      name:"Lawson Rd & Hwy 25",
      route:'/location/mavid'
    },
    {
      src:"assets/images/park2.jpg",
      name:"Derry Rd W & Mavis Rd",
       route:'/location/derry'
    },
    {
      src:"assets/images/park3.jpg",
      name:"Lake Ridge Rd & Taunton Rd W",
       route:'/location/lake'
    },
    {
      src:"assets/images/park4.jpg",
      name:"Dean Dr & Concession Rd 7",
       route:'/location/dean'
    }
  ];

  responsiveOptions:any;
 
  ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
          breakpoint: '500px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '390px',
          numVisible: 1,
          numScroll: 1
      }
    ];
}

}