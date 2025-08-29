import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/reservation.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Public()
  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    return await this.reservationsService.create(createReservationDto);
  }

  @Public()
  @Get('/:id')
  async getReservationById(@Param('id') id: string) {
    return await this.reservationsService.getReservationById(id);
  }
}
