import { CommonModule } from '@angular/common'; 
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-partener',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],  // Removed BrowserAnimationsModule
  templateUrl: './partener.component.html',
  styleUrls: ['./partener.component.css']  // Corrected to styleUrls (plural)
})
export class PartenerComponent implements OnInit {
  products:any=[
    {
      src:"assets/images/staffscanada.png",
      name:"STAFFS CANADA"
    },
    {
      src:"assets/images/toro.png",
      name:"TORO LOGISTICS INC"
    },
    {
      src:"assets/images/flex.png",
      name:"FLEX MOBILE WASH"
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

