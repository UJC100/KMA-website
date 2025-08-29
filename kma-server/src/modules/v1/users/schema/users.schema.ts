// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { RoleEnum } from 'src/common/enums/roles.enum';

export type UserDocument = User & Document & { _id: Types.ObjectId };

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  clerkId: string;

  @Prop()
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ default: null })
  imageUrl: string;

  @Prop({ default: null })
  phoneNumber: string;

  @Prop({ default: null })
  country: string;

  @Prop({ default: null })
  city: string;

  @Prop({ type: [String], default: [] })
  occupation: string[];

  @Prop({ default: null })
  facebook: string;

  @Prop({ default: null })
  linkedin: string;

  @Prop({ default: null })
  goals: string;

  @Prop({ type: [String], enum: RoleEnum, default: [RoleEnum.MENTEE] })
  role: RoleEnum[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
  mentees: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
