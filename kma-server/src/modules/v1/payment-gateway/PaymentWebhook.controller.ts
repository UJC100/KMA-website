import { PaymentGatewayService } from './payment-gateway.service';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ReservationsService } from '../reservations/reservations.service';

@Controller('webhooks/paymongo')
export class PaymentWebhookController {
  constructor(
    private readonly paymentGatewayService: PaymentGatewayService,
    private readonly reservationService: ReservationsService,
  ) {}
  @Post()
  async handleWebhook(@Req() req: Request, @Res() res: Response) {
    try {
      const signature = req.headers['paymongo-signature'] as string | undefined;
      const rawBody = JSON.stringify(req.body);

      if (!signature) {
        throw new HttpException(
          'Missing PayMongo signature',
          HttpStatus.BAD_REQUEST,
        );
      }

      const isVerified = this.paymentGatewayService.verifySignature(
        rawBody,
        signature,
      );

      if (!isVerified) {
        throw new HttpException(
          'Invalid PayMongo signature',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const event = req.body;

      console.log('Received PayMongo Webhook:', JSON.stringify(event, null, 2));

      if (
        event.data &&
        event.data.attributes &&
        event.data.attributes.status === 'paid'
      ) {
        const reference: string = event.data.attributes.reference_number;

        try {
          await this.reservationService.markAsPaid(reference);
        } catch (error) {
          console.error(
            '❌ Failed to mark reservation as paid:',
            error.message,
          );
        }

        // Find booking by reference and mark as paid
        console.log(`✅ Booking ${reference} paid!`);
        // await this.bookingService.markAsPaid(reference);
      }

      res.status(200).send('OK');
    } catch (error) {
      console.error('⚠️ Error processing PayMongo webhook:', error);
      res.status(400).send({ error: 'Webhook processing failed' });
    }
  }
}
