import { IsString } from 'class-validator';

export class TeamSessionDto {
  @IsString()
  topic: string;

  @IsString()
  time: string;

  @IsString()
  date: string;
}

export class AddCommentDto {
  @IsString()
  text: string;
}
