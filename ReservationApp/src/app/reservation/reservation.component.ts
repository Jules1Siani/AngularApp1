// reservation.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
})
export class ReservationComponent {
  conservationAreas = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'];
  selectedArea: string | null = null;
  selectedTime: string | null = null;

  // Define the available time slots
  timeSlots: string[] = [
    '09:00 - 12:00',
    '12:00 - 15:00',
    '15:00 - 18:00'
  ];

  constructor(private reservationService: ReservationService, private router: Router) {}

  onSubmit() {
    if (this.selectedArea && this.selectedTime) {
      this.reservationService.addSlot(this.selectedArea, this.selectedTime);
      this.router.navigate(['/confirmation']);
    }
  }
}
