import { EmailSenderService } from './../../../email-sender/email-sender.service';
import { GoogleCalendarService } from '../google-meet/google.service';
/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Meetings, MeetingsDocument } from './schema/meetings.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MeetingDto } from './dto/meetings.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { sendApplicationEmail } from '../../../common/email-templates/applicationEmail';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectModel(Meetings.name) private meetingsModel: Model<MeetingsDocument>,
    private googleCalendarService: GoogleCalendarService,
    private readonly mailerService: MailerService,
    private readonly emailSenderService: EmailSenderService
  ) {}

  async createMeeting(data: MeetingDto): Promise<Meetings> {
    const { email, meetingDate, meetingTime } = data;
    const userEmail = await this.meetingsModel.findOne({ email }).exec();

    if (userEmail) {
      throw new ConflictException('You already have a meeting scheduled');
    }
    const emailArr = [email, process.env.EMAIL_USER].filter(
      (e): e is string => typeof e === 'string',
    );
    console.log(emailArr)
    const meetLink = await this.googleCalendarService.createMeet(
      meetingDate,
      meetingTime,
      emailArr,
    );

    console.log(`heres the meetlink ${meetLink}`);

    const meetings = await this.meetingsModel.create({
      ...data,
      meetLink,
    });
//    try {
//   await this.emailSenderService.sendGoogleMeetEmail(emailArr, meetingDate, meetingTime, meetLink);
// } catch (err) {
//   console.error("Email sending failed:", err);
//   // Optionally: continue without failing the whole request
// }

// try {
//   await this.sendEmail(data);
// } catch (err) {
//   console.error("Application email failed:", err);
//   // Optionally: continue without failing the whole request
// }

    return meetings;
  }

  async sendEmail(data: MeetingDto) {
    const emailData = {
      age: data.age,
      phone: data.phone,
      fullName: data.fullName,
      email: data.email,
      occupation: data.occupation,
      motivations: data.motivations,
      challenges: data.challenges,
      commitments: data.commitments,
      vision: data.vision,
      agreement: data.agreement,
    };

    await sendApplicationEmail(this.mailerService, emailData);
  }

  async findAllMeetings(): Promise<Meetings[]> {
    return await this.meetingsModel.find().exec();
  }

  async findOneMeeting(id: string): Promise<Meetings> {
    const meeting = await this.meetingsModel.findById(id).exec();
    if (!meeting) {
      throw new NotFoundException('Meeting not found');
    }
    return meeting;
  }
}
