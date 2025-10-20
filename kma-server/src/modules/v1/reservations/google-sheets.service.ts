import { Injectable } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import { JWTInput } from 'google-auth-library';

interface ReservationRow {
  name: string;
  email: string;
  eventId: string;
  eventName: string;
  location: string;
  date: string;
  time: string;
  ticketType: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'paid';
  createdAt: string; // formatted date string (e.g., from new Date().toLocaleString())
}

@Injectable()
export class GoogleSheetsService {
  private sheets: sheets_v4.Sheets;

  constructor() {
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!serviceAccountJson) {
      throw new Error(
        'Missing GOOGLE_SERVICE_ACCOUNT_JSON environment variable',
      );
    }

    const credentials = JSON.parse(serviceAccountJson) as JWTInput; // parse the string to an object

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async addReservation(spreadsheetId: string, reservation: ReservationRow) {
    const values = [
      [
        reservation.name,
        reservation.email,
        reservation.eventId,
        reservation.eventName,
        reservation.location,
        reservation.date,
        reservation.time,
        reservation.amount,
        reservation.quantity,
        reservation.ticketType,
        reservation.status,
        new Date().toLocaleString(), // timestamp
      ],
    ];

    await this.sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:L',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });
  }
}
