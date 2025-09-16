import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailService: MailerService) {}

  async sendGoogleMeetEmail(
    to: string[],
    date: string,
    time: string,
    meetLink: string,
  ) {
    await this.mailService.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Google Meet Invitation: Your Mentorship Meeting',
      html: `
      <div style="font-family: Roboto, Arial, sans-serif; background: #f5f5f5; padding: 24px;">
        <div style="max-width: 480px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #eee; padding: 24px;">
          <h2 style="color: #1a73e8; margin-bottom: 8px;">Mentorship Meeting Scheduled</h2>
          <p style="font-size: 16px; color: #333;">You have a mentorship meeting scheduled.</p>
          <table style="margin: 16px 0;">
            <tr>
              <td style="font-weight: bold; color: #555;">Date:</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555;">Time:</td>
              <td>${time}</td>
            </tr>
          </table>
          <div style="margin: 24px 0;">
            <a href="${meetLink}" style="background: #1a73e8; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-size: 16px; display: inline-block;">
              Join Google Meet
            </a>
          </div>
          <p style="font-size: 14px; color: #888;">Or copy and paste this link into your browser:</p>
          <p style="font-size: 14px; color: #1a73e8;">${meetLink}</p>
          <hr style="margin: 24px 0;">
          <p style="font-size: 12px; color: #aaa;">This is an automated invitation. Please do not reply.</p>
        </div>
      </div>
    `,
    });
  }
}
