import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  eventId: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  quantity: number;

  @IsString()
  eventName: string;

  @IsString()
  location: string;

  @IsString()
  date: string;
}
