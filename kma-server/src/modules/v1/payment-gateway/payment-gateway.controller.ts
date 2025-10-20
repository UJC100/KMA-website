/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
 import { Controller, Post, Body,} from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { ReservationsService } from '../reservations/reservations.service';
import { CreateReservationDto } from '../reservations/dto/reservation.dto';




@Controller('payment-gateway')
export class PaymentGatewayController {
   
  constructor(private readonly paymentService: PaymentGatewayService,
    private readonly reservtionsService: ReservationsService
  ) {}

  @Post('reserve')
  async reserveTicket(@Body() body: CreateReservationDto) {
const { ticketType, quantity } = body;


          // 🎟 Dynamic pricing
    const ticketPrices = {
      regular: 1000,
      couples: 1700,
      vip: 2000,
    };
    const price = ticketPrices[ticketType.toLowerCase()] || 1000;
    const totalAmount = price * quantity;

   const reservation = await this.reservtionsService.create({
         ...body,
      amount: totalAmount,
    })
    const reservationId: string = reservation.id

    const paymentUrl = await this.paymentService.createCheckoutSession(totalAmount, reservationId);

    return {
      message: 'Payment session created successfully',
      reservation,
      checkoutUrl: paymentUrl,
    };
  }

}
