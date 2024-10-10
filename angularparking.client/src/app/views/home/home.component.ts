import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HomeDeatailsComponent } from "./home-deatails/home-deatails.component";
import { HomeServicesComponent } from "./home-services/home-services.component";
import { HomeOfferComponent } from "./home-offer/home-offer.component";
import { HomeContactComponent } from "./home-contact/home-contact.component";
import { PartenerComponent } from "./partener/partener.component"; 
import { LocationsComponent } from './locations/locations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected from styleUrl to styleUrls
  imports: [HomeDeatailsComponent, HomeServicesComponent, HomeOfferComponent, HomeContactComponent, PartenerComponent, LocationsComponent]
})

export class HomeComponent implements AfterViewInit {

  @ViewChild('headerVideo')headerVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.headerVideo.nativeElement;
    // Reset the video settings to autoplay without controls
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.controls = false;
    video.play();
  }
}
