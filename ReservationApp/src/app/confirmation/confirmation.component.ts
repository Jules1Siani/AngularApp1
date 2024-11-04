// src/app/confirmation/confirmation.component.ts
import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule] 
})
export class ConfirmationComponent {
  slots: { area: string; time: string }[] = [];

  constructor(private reservationService: ReservationService) {
    this.slots = this.reservationService.getSlots();
    console.log("Confirmed reservations:", this.slots);
  }
}
