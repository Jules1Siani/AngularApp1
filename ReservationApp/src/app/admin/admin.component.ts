// src/app/admin/admin.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { ReservationService, Reservation } from '../reservation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] 
})
export class AdminComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation: Reservation | null = null;

  constructor(private reservationService: ReservationService) {
    console.log("AdminComponent - ReservationService instance ID:", this.reservationService['instanceId']);
  }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservations = this.reservationService.getSlots();
    console.log("Loaded reservations in AdminComponent:", this.reservations);
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteSlot(id);
    this.loadReservations();
  }

  editReservation(reservation: Reservation): void {
    this.selectedReservation = { ...reservation };
    console.log("Editing reservation:", this.selectedReservation);
  }

  saveReservation(): void {
    if (this.selectedReservation) {
      this.reservationService.updateSlot(this.selectedReservation);
      this.selectedReservation = null;
      this.loadReservations();
    }
  }

  cancelEdit(): void {
    console.log("Cancelled edit.");
    this.selectedReservation = null;
  }
}
