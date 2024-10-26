// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route d'accueil
  { path: 'reservation', component: ReservationComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];
