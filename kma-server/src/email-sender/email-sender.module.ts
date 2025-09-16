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
        user: 'kingdommentorshipacademy@gmail.com',
        pass: 'ksjz xicb pmvy hypf'
      },
      secure: false,
    },
    
    
   }),
  ],
  providers: [EmailSenderService],
  exports: [EmailSenderService]
})
export class EmailSenderModule {}
