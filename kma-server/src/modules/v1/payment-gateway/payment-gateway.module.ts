import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayController } from './payment-gateway.controller';
import { PaymentWebhookController } from './PaymentWebhook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Reservation,
  ReservationSchema,
} from '../reservations/schema/reservations.schema';
import { ReservationsModule } from '../reservations/reservations.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
    ReservationsModule,
  ],
  providers: [PaymentGatewayService],
  controllers: [PaymentGatewayController, PaymentWebhookController],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
