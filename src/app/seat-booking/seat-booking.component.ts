import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SeatBookingComponent {
  seatRows: Array<Array<{ seat_number: number; isBooked: boolean }>> = [];
  requestedSeats: number = 0; // Initialize with a default value

  constructor() {
    this.initializeSeats();
  }

  initializeSeats() {
    let seatNumber = 1;
    const storedSeats = localStorage.getItem('seats');

    if (storedSeats) {
      this.seatRows = JSON.parse(storedSeats);
    } else {
      for (let i = 1; i <= 11; i++) {
        // Rows 1 to 11 with 7 seats
        const row = [];
        for (let j = 1; j <= 7; j++) {
          row.push({ seat_number: seatNumber, isBooked: false });
          seatNumber++;
        }
        this.seatRows.push(row);
      }

      // Last row with 3 seats
      const lastRow = [];
      for (let k = 1; k <= 3; k++) {
        lastRow.push({ seat_number: seatNumber, isBooked: false });
        seatNumber++;
      }
      this.seatRows.push(lastRow);
    }
  }

  bookSeats() {
    const seatsToBook = this.requestedSeats;
    const bookedSeats: number[] = [];

    // Try booking in one row first
    for (const row of this.seatRows) {
      const availableSeats = row.filter((seat) => !seat.isBooked);
      if (availableSeats.length >= seatsToBook) {
        for (let i = 0; i < seatsToBook; i++) {
          availableSeats[i].isBooked = true;
          bookedSeats.push(availableSeats[i].seat_number);
        }
        break;
      }
    }

    // If unable to book in one row, find nearby seats
    if (bookedSeats.length < seatsToBook) {
      let remainingSeats = seatsToBook - bookedSeats.length;
      for (const row of this.seatRows) {
        const availableSeats = row.filter((seat) => !seat.isBooked);
        for (const seat of availableSeats) {
          if (remainingSeats === 0) break;
          seat.isBooked = true;
          bookedSeats.push(seat.seat_number);
          remainingSeats--;
        }
        if (remainingSeats === 0) break;
      }
    }

    // Save the updated seats to local storage
    localStorage.setItem('seats', JSON.stringify(this.seatRows));

    console.log(`Seats booked: ${bookedSeats}`);
  }
}