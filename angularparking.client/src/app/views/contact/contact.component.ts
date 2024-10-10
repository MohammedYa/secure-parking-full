import { Component } from '@angular/core';
import { ContactheaderComponent } from "./contactheader/contactheader.component";
import { ContactBodyComponent } from "./contact-body/contact-body.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactheaderComponent, ContactBodyComponent,RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
