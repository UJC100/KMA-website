/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
 import { Controller, Post, Body } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';




@Controller('payment-gateway')
export class PaymentGatewayController {
   
  constructor(private readonly paymentService: PaymentGatewayService) {}

  @Post('reserve')
  async reserveTicket(@Body() body: any) {
    const { tickets } = body;

    // Create booking in your DB here — pseudo code:
    const bookingId = 'BOOKING-' + Date.now();

    const paymentUrl = await this.paymentService.createCheckoutSession(
      tickets * 1500,
      bookingId,
    );

    return { paymentUrl };
  }

}
