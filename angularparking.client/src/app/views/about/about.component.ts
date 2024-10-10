import { Component } from '@angular/core';
import { HeaderAboutComponent } from "./header-about/header-about.component";
import { WhyChooseComponent } from "./why-choose/why-choose.component";
import { OfferAboutComponent } from "./offer-about/offer-about.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeaderAboutComponent, WhyChooseComponent, OfferAboutComponent]
})
export class AboutComponent {

}
