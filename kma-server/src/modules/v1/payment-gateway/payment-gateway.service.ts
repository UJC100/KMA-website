/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosError, AxiosResponse } from 'axios';
import * as crypto from 'crypto';
import { Reservation, ReservationDocument } from '../reservations/schema/reservations.schema';
import { Model } from 'mongoose';

interface PaymongoLinkResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      amount: number;
      checkout_url: string;
      description: string;
      reference_number: string;
      status: string;
      currency: string;
    };
  };
}

@Injectable()
export class PaymentGatewayService {
  private readonly paymongoSecretKey: string;
  private readonly paymongoBaseUrl = 'https://api.paymongo.com/v1';

  constructor(    @InjectModel(Reservation.name)
    private readonly reservationModel: Model<ReservationDocument>,
) {
    if (!process.env.PAYMONGO_SECRET_KEY) {
      throw new Error('PAYMONGO_SECRET_KEY is not set in env!!');
    }
    this.paymongoSecretKey = process.env.PAYMONGO_SECRET_KEY;
  }

  async createCheckoutSession(amount: number, _id: string) {
    try {
      const response: AxiosResponse<PaymongoLinkResponse> = await axios.post(
        `${this.paymongoBaseUrl}/links`,
        {
          data: {
            attributes: {
              amount: Math.round(amount * 100),
              currency: 'PHP',
              description: `Event Ticket Reservation - ${_id}`,
              remarks: 'Ticket Reservation',
              reference_number: _id.toString(),
              success_redirect:
                process.env.PAYMENT_SUCCESS_REDIRECT ??
                'http://localhost:5173/confirmation',
              cancel_redirect:
                process.env.PAYMENT_CANCEL_REDIRECT ??
                'http://localhost:5173/reserve',
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

      const link = response.data?.data?.attributes?.checkout_url;

      if (!link) {
        throw new HttpException(
          'PayMongo response missing checkout URL',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return link;
    } catch (error) {
      const err = error as AxiosError<{ errors?: { detail?: string }[] }>;

      const detailMessage =
        err.response?.data?.errors?.[0]?.detail ??
        err.message ??
        'Unknown error from PayMongo';

      console.error('❌ PayMongo API Error:', detailMessage);

      throw new HttpException(
        `Failed to create PayMongo checkout session: ${detailMessage}`,
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  verifySignature(rawBody: string, signature: string): boolean {
    const computed = crypto
      .createHmac('sha256', this.paymongoSecretKey)
      .update(rawBody)
      .digest('hex');
    return computed === signature;
  }

  
}
