import { Module } from '@nestjs/common';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Meetings, MeetingsSchema } from './schema/meetings.schema';
import { AuthController } from '../google-meet/google.controller';
import { GoogleMeetModule } from '../google-meet/google-meet.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Meetings.name, schema: MeetingsSchema },
    ]),
    GoogleMeetModule,
  ],
  controllers: [MeetingsController, AuthController],
  providers: [MeetingsService],
})
export class MeetingsModule {}
