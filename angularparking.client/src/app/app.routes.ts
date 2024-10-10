
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ServicesComponent } from './views/services/services.component';
import { TrailerCareComponent } from './views/services/trailer-care/trailer-care.component';
import { ParkingComponent } from './views/services/parking/parking.component';
import { YardManagementComponent } from './views/services/yard-management/yard-management.component';
import { TruckcareComponent } from './views/services/truckcare/truckcare.component';
import { MobileWashComponent } from './views/services/mobile-wash/mobile-wash.component';
import { RequestServicesComponent } from './views/request-services/request-services.component';
import { AuthComponent } from './views/auth/auth.component';
import { ReqestDetailsComponent } from './views/reqest-details/reqest-details.component';
import { DashboardHomeComponent } from './views/dashboard-home/dashboard-home.component';
import { authGuard } from './core/services/auth.guard';
import { ParkingLocationsComponent } from './views/parking-locations/parking-locations.component';
import { MavidComponent } from './views/parking-locations/mavid/mavid.component';
import { DeeryComponent } from './views/parking-locations/deery/deery.component';
import { LakeComponent } from './views/parking-locations/lake/lake.component';
import { DeanComponent } from './views/parking-locations/dean/dean.component';
import { AllRequestsComponent } from './views/dashboard-home/all-requests/all-requests.component';
import { AcceptReqComponent } from './views/dashboard-home/accept-req/accept-req.component';
import { CanceledReqComponent } from './views/dashboard-home/canceled-req/canceled-req.component';
import { SettingEmailComponent } from './views/dashboard-home/setting-email/setting-email.component';
import { ForgetPasswordComponent } from './views/forget-password/forget-password.component';

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
        // children: [
        //   {
        //     path: 'homeoffer',
        //     loadChildren: () => import('./views/home/home-offer/home-offer.component').then((m) => m.HomeOfferComponent)
        //   },
         
        // ]
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
        },
        // children: [
        //   {
        //     path: 'aboutoffer',
        //     loadChildren: () => import('./views/about/offer-about/offer-about.component').then((m) => m.OfferAboutComponent)
        //   },
        //   {
        //     path: 'whychoose',
        //     loadChildren: () => import('./views/about/why-choose/why-choose.component').then((m) => m.WhyChooseComponent)
        //   },
         
        // ]
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Services'
        },
        children: [
         
          {
            path: 'parking',
            component:ParkingComponent
            // loadChildren: () => import('./views/services/parking/parking.component').then((m) => m.ParkingComponent)
          },
         
          {
            path: 'trailer-care',
            component:TrailerCareComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'truck-Mechanic',
            component:TruckcareComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'mobile-wash',
            component:MobileWashComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'YardManagement',
            component:YardManagementComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
         
        ]
      },
      {
        path:'contact',
        component:ContactComponent,
        data:{
            title:'Contact'
        },
        
      },
      {
        path:'request',
        component:RequestServicesComponent,
        data:{
           title:'Request Services'
        }
      },
      {
        path:'Login',
        component:AuthComponent,
        data:{
           title:'Login'
        }
      },
      {
        path:'ForgetPassword',
        component:ForgetPasswordComponent,
        data:{
           title:'ForgetPassword'
        }
      }
      ,
      {
        path:'ReqestInformation/:id',
        canActivate:[authGuard],
        component:ReqestDetailsComponent,
        data:{
           title:'ReqestInformation'
        }
      },
      {
        path: 'location',
        component: ParkingLocationsComponent,
        data: {
          title: 'Parking Location'
        },
        children: [
         
          {
            path: 'mavid',
            component:MavidComponent
            // loadChildren: () => import('./views/services/parking/parking.component').then((m) => m.ParkingComponent)
          },
         
          {
            path: 'derry',
            component:DeeryComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'lake',
            component:LakeComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'dean',
            component:DeanComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'mobile-wash',
            component:MobileWashComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
          {
            path: 'YardManagement',
            component:YardManagementComponent
            // loadChildren: () => import('./views/services/trailer-care/trailer-care.component').then((m) => m.TrailerCareComponent)
          },
         
        ]
      },
      {
        path:'Dashboard',
        canActivate:[authGuard],
        component:DashboardHomeComponent,
        children:
        [
        {path:"",redirectTo:"AllApplication",pathMatch:"full"},
        {path:"AllApplication",component:AllRequestsComponent},
        { path:"AcceptRequests",component:AcceptReqComponent },
        {path:"CanceledRequests",component:CanceledReqComponent},
        {path:"settingEmail",component:SettingEmailComponent},
        
        ]
      }
      ,
    
];
