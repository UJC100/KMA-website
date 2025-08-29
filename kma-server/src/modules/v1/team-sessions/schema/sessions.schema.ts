import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TeamSessionDocument = TeamSession & Document;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ required: true })
  text: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

@Schema({ timestamps: true })
export class TeamSession {
  @Prop({ required: true })
  topic: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  mentor: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], required: true })
  mentees: Types.ObjectId[];

  @Prop({ default: false })
  isClosed: boolean;

  @Prop({ type: [Comment], default: [] })
  comments: Comment[];

  @Prop({ default: null })
  meetingLink: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  date: string;
}

export const TeamSessionSchema = SchemaFactory.createForClass(TeamSession);
