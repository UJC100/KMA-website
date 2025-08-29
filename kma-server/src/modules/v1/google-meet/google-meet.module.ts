import { Module } from '@nestjs/common';
import { AuthController } from './google.controller';
import { GoogleCalendarService } from './google.service';

@Module({
  controllers: [AuthController],
  providers: [GoogleCalendarService],
  exports: [GoogleCalendarService],
})
export class GoogleMeetModule {}
