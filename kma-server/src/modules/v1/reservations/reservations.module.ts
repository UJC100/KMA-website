import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './schema/reservations.schema';
import { PaymentGatewayService } from '../../../modules/v1/payment-gateway/payment-gateway.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  providers: [ReservationsService, PaymentGatewayService],
  controllers: [ReservationsController],
})
export class ReservationsModule {}
