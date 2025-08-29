/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationDto } from './dto/reservation.dto';
import { Reservation, ReservationDocument } from './schema/reservations.schema';
import { PaymentGatewayService } from '../../../modules/v1/payment-gateway/payment-gateway.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<ReservationDocument>,
    private readonly paymentService: PaymentGatewayService,
    private readonly mailService: MailerService,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationDocument> {
    // 1. Create DB record first
    const reservation = new this.reservationModel(
      createReservationDto,
    ) as ReservationDocument;
    await reservation.save();
    return reservation;
  }

  async sendConfirmationEmail(to: string, name: string, checkoutUrl: string) {
    await this.mailService.sendMail({
      from: `"Your Event 🎉" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Your Reservation - Complete Payment',
      html: `<p>Hi ${name},</p>
             <p>Thank you for your reservation. Please complete your payment:</p>
             <a href="${checkoutUrl}">Pay Now</a>`,
    });
  }
  async getReservationById(id: string): Promise<Reservation | null> {
    return await this.reservationModel.findById(id).exec();
  }
}
