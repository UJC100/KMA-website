/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Transport } from './../../node_modules/@types/nodemailer/index.d';
/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';



@Injectable()
export class EmailSenderService {

    constructor(private readonly mailService: MailerService) {}


    async SendMail(to: string, date: string, time: string, meetLink: string) {
        
        const info = await this.mailService.sendMail({
            from: process.env.SMTP_USER, 
            to,
            subject: "Your Meeting is Scheduled!",
            html: `<p>Hi!</p>
        <p>Your meeting is confirmed for ${date} at ${time}.</p>
        <p>Join using this link: <a href="${meetLink}">${meetLink}</a></p>`
        })

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log('Email sent:', info.messageId);
    }
}
