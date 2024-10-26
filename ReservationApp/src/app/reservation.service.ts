import { Injectable } from '@angular/core';

export interface Reservation {
  area: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private slots: Reservation[] = [];

  addSlot(area: string, time: string) {
    this.slots.push({ area, time });
  }

  getSlots(): Reservation[] {
    return this.slots;
  }
}
