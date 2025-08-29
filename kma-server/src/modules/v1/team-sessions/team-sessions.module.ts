import { Module } from '@nestjs/common';
import { TeamSessionsController } from './team-sessions.controller';
import { TeamSessionsService } from './team-sessions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSession, TeamSessionSchema } from './schema/sessions.schema';
import { UsersModule } from '../users/users.module';
import { User, UserSchema } from '../users/schema/users.schema';
import { GoogleMeetModule } from '../google-meet/google-meet.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TeamSession.name, schema: TeamSessionSchema },
      { name: User.name, schema: UserSchema },
    ]),
    UsersModule,
    GoogleMeetModule,
  ],
  controllers: [TeamSessionsController],
  providers: [TeamSessionsService],
})
export class TeamSessionsModule {}
