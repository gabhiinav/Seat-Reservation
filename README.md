# Seat Reservation System

A simple Angular app that allows users to reserve seats in a train coach. The seat data is stored in local storage.

## Features

- Book up to 7 seats at a time.
- Prioritize booking in one row; if unavailable, nearby seats are booked.
- Seat status displayed: green (available), red (booked).
- Data persists using browser local storage.

## Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/seat-reservation-system.git
   cd seat-reservation-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   ng serve
   ```

4. **Access the app**:
   Go to `http://localhost:4200/`.

## Database Structure

- **Local Storage Key**: `seats`
- **Value**: A JSON array of seat objects:
  ```json
  [
    { "seat_number": 1, "isBooked": false },
    ...
  ]
  ```

## Notes

- Uses Angular standalone components.
