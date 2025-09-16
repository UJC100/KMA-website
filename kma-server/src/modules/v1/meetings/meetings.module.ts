import { Module } from '@nestjs/common';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Meetings, MeetingsSchema } from './schema/meetings.schema';
import { AuthController } from '../google-meet/google.controller';
import { GoogleMeetModule } from '../google-meet/google-meet.module';
import { EmailSenderModule } from '../../../email-sender/email-sender.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Meetings.name, schema: MeetingsSchema },
    ]),
    GoogleMeetModule,
    EmailSenderModule,
  ],
  controllers: [MeetingsController, AuthController],
  providers: [MeetingsService],
})
export class MeetingsModule {}
