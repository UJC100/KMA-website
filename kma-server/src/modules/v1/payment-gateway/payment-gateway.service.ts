/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import axios from 'axios';



@Injectable()
export class PaymentGatewayService {
     private readonly paymongoSecretKey: string

     constructor() {
      if(!process.env.PAYMONGO_SECRET_KEY) {
        throw new Error('PAYMONGO_SECRET_KEY is not set in env!!')
      }
      this.paymongoSecretKey = process.env.PAYMONGO_SECRET_KEY;
     }

  async createCheckoutSession(amount: number, bookingId: string) {
    const response = await axios.post(
      'https://api.paymongo.com/v1/links',
      {
        data: {
          attributes: {
            amount: amount * 100, // PayMongo uses cents!
            currency: 'PHP',
            description: `Event Ticket Reservation - ${bookingId}`,
            remarks: 'Ticket Reservation',
            reference_number: bookingId,
            success_redirect: 'http://localhost:5173/confirmation',
            cancel_redirect: 'http://localhost:5173/reserve',
          },
        },
      },
      {
        auth: {
          username: this.paymongoSecretKey,
          password: '',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.data.attributes.checkout_url;
  }
}
