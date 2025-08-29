import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class MeetingDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  age: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  occupation: string;

  // motivation as array
  @IsArray()
  @IsString({ each: true })
  motivations: string[];

  // challenges as array
  @IsArray()
  @IsString({ each: true })
  challenges: string[];

  // commitments as array
  @IsArray()
  @IsString({ each: true })
  commitments: string[];

  @IsString()
  @IsNotEmpty()
  vision: string;

  @IsBoolean()
  @IsNotEmpty()
  agreement: boolean;

  @IsString()
  @IsNotEmpty()
  meetingDate: string;

  @IsString()
  @IsNotEmpty()
  meetingTime: string;
}
