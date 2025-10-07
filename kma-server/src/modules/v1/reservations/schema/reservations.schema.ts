import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReservationDocument = HydratedDocument<Reservation>;

@Schema({ timestamps: true })
export class Reservation {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  eventId: string;

  @Prop({ required: true })
  eventName: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: false })
  time: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  ticketType: string;

  @Prop({ default: 'pending' })
  status: 'pending' | 'paid';
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
