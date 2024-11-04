// src/app/reservation.service.ts
import { Injectable } from '@angular/core';

export interface Reservation {
  id: number;
  area: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private slots: Reservation[] = [
    { id: 1, area: 'Zone A', time: '9:00 - 12:00' },
    { id: 2, area: 'Zone B', time: '12:00 - 15:00' },
    { id: 3, area: 'Zone C', time: '15:00 - 18:00' }
  ];
  private currentId = 4;
  
  // Identifiant unique pour vérifier l'unicité de l'instance
  private instanceId = Math.random();

  constructor() {
    console.log("ReservationService instance ID:", this.instanceId);
  }

  addSlot(area: string, time: string) {
    const newReservation: Reservation = { id: this.currentId++, area, time };
    this.slots.push(newReservation);
    console.log("Added reservation:", newReservation);
    console.log("Current reservations:", this.slots);
  }

  getSlots(): Reservation[] {
    console.log("Getting reservations:", this.slots);
    return this.slots;
  }

  deleteSlot(id: number): void {
    this.slots = this.slots.filter(slot => slot.id !== id);
    console.log("Deleted reservation with ID:", id);
    console.log("Current reservations after deletion:", this.slots);
  }

  updateSlot(updatedReservation: Reservation): void {
    const index = this.slots.findIndex(slot => slot.id === updatedReservation.id);
    if (index !== -1) {
      this.slots[index] = updatedReservation;
      console.log("Updated reservation:", updatedReservation);
    }
  }
}

