import { Module } from '@nestjs/common';
import { MeetingsModule } from './modules/v1/meetings/meetings.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { PaymentGatewayModule } from './modules/v1/payment-gateway/payment-gateway.module';
import { ReservationsModule } from './modules/v1/reservations/reservations.module';
import { UsersModule } from './modules/v1/users/users.module';
import { ClerkClientProvider } from './providers/clerk-client.providers';
import { AuthModule } from './clerk-auth/auth.module';
import { ClerkAuthGuard } from './clerk-auth/clerk-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { GoogleMeetModule } from './modules/v1/google-meet/google-meet.module';
import { TeamSessionsModule } from './modules/v1/team-sessions/team-sessions.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist/public'),
      // Use a named wildcard to exclude all paths starting with /api
      exclude: ['/api*wildcard'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    MeetingsModule,
    EmailSenderModule,
    PaymentGatewayModule,
    ReservationsModule,
    UsersModule,
    AuthModule,
    GoogleMeetModule,
    TeamSessionsModule,
  ],
  controllers: [AppController],
  providers: [
    ClerkClientProvider,
    {
      provide: APP_GUARD,
      useClass: ClerkAuthGuard,
    },
  ],
})
export class AppModule {}
