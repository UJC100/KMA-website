/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReservationDto } from './dto/reservation.dto';
import { Reservation, ReservationDocument } from './schema/reservations.schema';
import { PaymentGatewayService } from '../../../modules/v1/payment-gateway/payment-gateway.service';
import { MailerService } from '@nestjs-modules/mailer';
import { GoogleSheetsService } from './google-sheets.service';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<ReservationDocument>,
    private readonly paymentService: PaymentGatewayService,
    private readonly mailService: MailerService,
    private readonly googleSheetsService: GoogleSheetsService,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationDocument> {
    // 1. Create DB record first
    const reservation = new this.reservationModel(
      createReservationDto,
    ) as ReservationDocument;
    await reservation.save();

    const createdAt = reservation.createdAt
      ? new Date(reservation.createdAt).toLocaleString()
      : new Date().toLocaleString();

    const googleSheetId: string | undefined = process.env.GOOGLE_SPREADSHEET_ID;
    if (!googleSheetId)
      throw new BadRequestException('No googlesheet id found');

    await this.googleSheetsService.addReservation(googleSheetId, {
      ...reservation.toObject(),
      createdAt,
    });

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
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid reservation ID');
    }

    const reservation = await this.reservationModel.findById(id).exec();

    if (!reservation) {
      throw new NotFoundException('Reservation not Found');
    }

    return reservation;
  }

  async markAsPaid(referenceId: string) {
    const reservation = await this.reservationModel.findById(referenceId);

    if (!reservation) {
      console.error(`Reservation not found for reference: ${referenceId}`);
      return;
    }

    reservation.status = 'paid';
    await reservation.save();

    console.log(`✅ Reservation ${referenceId} marked as paid.`);
  }
}
