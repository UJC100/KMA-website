/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('webhooks/paymongo')
export class PaymentWebhookController {
  @Post()
  async handleWebhook(@Req() req: Request, @Res() res: Response) {
    const event = req.body;

    console.log('Received PayMongo Webhook:', JSON.stringify(event, null, 2));

    if (
      event.data &&
      event.data.attributes &&
      event.data.attributes.status === 'paid'
    ) {
      const reference = event.data.attributes.reference_number;

      // Find booking by reference and mark as paid
      console.log(`✅ Booking ${reference} paid!`);
      // await this.bookingService.markAsPaid(reference);
    }

    res.status(200).send('OK');
  }
}
