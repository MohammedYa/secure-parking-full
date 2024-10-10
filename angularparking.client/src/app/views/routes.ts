import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ReqestDetailsComponent } from './reqest-details/reqest-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        },
        children: [
          {
            path: 'homeoffer',
            loadChildren: () => import('./home/home-offer/home-offer.component').then((m) => m.HomeOfferComponent)
          },
         
        ]
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
        },
        children: [
          {
            path: 'aboutoffer',
            loadChildren: () => import('./about/offer-about/offer-about.component').then((m) => m.OfferAboutComponent)
          },
          {
            path: 'whychoose',
            loadChildren: () => import('./about/why-choose/why-choose.component').then((m) => m.WhyChooseComponent)
          },
         
        ]
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Servicess'
        },
        children: [
          {
            path: 'leasing',
            // loadChildren: () => import('./services/leasing/leasing.component').then((m) => m.LeasingComponent)
          },
          {
            path: 'whychoose',
            loadChildren: () => import('./about/why-choose/why-choose.component').then((m) => m.WhyChooseComponent)
          },
         
        ]
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        },
        children: [
          {
            path: 'request',
            loadChildren: () => import('./request-services/request-services.component').then((m) => m.RequestServicesComponent)
          },
        
         
        ]
      },
];
