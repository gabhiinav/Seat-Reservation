import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-seat-booking></app-seat-booking>`,
  imports: [SeatBookingComponent],
})
export class AppComponent {
  title = 'seat-reservation-app';
}
