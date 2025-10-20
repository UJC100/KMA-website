import { IsEnum, IsInt, Min } from 'class-validator';
import { TicketType } from '../../../../common/enums/ticketType.enum';

export class CreatePaymentDto {
  @IsEnum(TicketType, {
    message: 'ticketType must be one of: regular, couples, vip',
  })
  ticketType: TicketType;

  @IsInt()
  @Min(1)
  quantity: number;
}
