/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
   MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      port:  587,
      auth: {
        user: 'meetjohnchima@gmail.com',
        pass: 'womx ongv btmc itrl'
      },
      secure: false,
    },
    
    
   }),
  ],
  providers: [EmailSenderService]
})
export class EmailSenderModule {}
