import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeetingsDocument = Meetings & Document;

@Schema({
  timestamps: true,
})
export class Meetings {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  occupation: string;

  @Prop({ type: [String], required: true })
  motivations: string[];

  @Prop({ type: [String], required: true })
  challenges: string[];

  @Prop({ type: [String], required: true })
  commitments: string[];

  @Prop({ required: true })
  vision: string;

  @Prop({ required: true })
  agreement: boolean;

  @Prop({ required: true })
  meetingDate: string;

  @Prop({ required: true })
  meetingTime: string;

  @Prop()
  meetLink: string;
}

export const MeetingsSchema = SchemaFactory.createForClass(Meetings);
