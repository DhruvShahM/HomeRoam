import { Routes } from '@angular/router';
import { PropertiesComponent } from './landlord/properties/properties.component';
import { authorityRouteAccess } from './shared/Services/core/auth/authority-route-access';

export const routes: Routes = [
  {
    path: 'landlord/properties',
    component: PropertiesComponent,
    canActivate: [authorityRouteAccess],
    data: {
      authorities: ["ROLE_LANDLORD"]
    }
  },
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'listing',
//     component: DisplayListingComponent
//   },
//   {
//     path: "booking",
//     component: BookedListingComponent
//   },
//   {
//     path: "landlord/reservation",
//     component: ReservationComponent,
//     canActivate: [authorityRouteAccess],
//     data: {
//       authorities: ["ROLE_LANDLORD"]
//     }
//   }

];
