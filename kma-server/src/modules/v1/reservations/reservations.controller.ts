import { Body, Controller, Get, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Public } from '../../../common/decorators/public.decorator';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Public()
  @Get('/:id')
  async getReservationById(@Param('id') id: string) {
    return await this.reservationsService.getReservationById(id);
  }
}
