import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamSession, TeamSessionDocument } from './schema/sessions.schema';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from '../users/schema/users.schema';
import { AddCommentDto, TeamSessionDto } from './dto/teamSession.dto';
import { GoogleCalendarService } from '../google-meet/google.service';
import { RoleEnum } from 'src/common/enums/roles.enum';

@Injectable()
export class TeamSessionsService {
  constructor(
    @InjectModel(TeamSession.name)
    private readonly sessionModel: Model<TeamSessionDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly googleCalendarService: GoogleCalendarService,
  ) {}

  async createSession(
    payload: TeamSessionDto,
    userId: string,
  ): Promise<TeamSession> {
    const user = await this.userModel.findById(userId);
    if (!user) throw new NotFoundException('Mentor not found');
    if (!user.role.includes(RoleEnum.MENTOR))
      throw new ForbiddenException('Only mentors can create sessions');

    // Send meeting invite emails
    const menteeUsers = await this.userModel.find({
      _id: { $in: user.mentees },
    });
    const allEmails = [user.email, ...menteeUsers.map((m) => m.email)];

    const meetingLink = await this.googleCalendarService.createMeet(
      payload.date,
      payload.time,
      allEmails,
    );

    // Create session document
    const session = await this.sessionModel.create({
      topic: payload.topic,
      mentor: user._id,
      mentees: user.mentees,
      isClosed: false,
      comments: [],
      time: payload.time,
      date: payload.date,
      meetingLink,
    });

    return session;
  }

  async getAllSessions(): Promise<TeamSession[]> {
    return this.sessionModel
      .find()
      .populate('mentor mentees', 'firstName lastName email imageUrl');
  }

  async getAllSessionsForParticipants(userId: string): Promise<TeamSession[]> {
    if (!Types.ObjectId.isValid(userId)) {
      throw new BadRequestException('Invalid user ID format');
    }

    const objectUserId = new Types.ObjectId(userId);

    const usersSessions = await this.sessionModel
      .find({
        $or: [{ mentor: objectUserId }, { mentees: objectUserId }],
      })
      .populate('mentor', 'firstName lastName email imageUrl')
      .populate('mentees', 'firstName lastName email imageUrl')
      .populate('comments.author', 'firstName lastName email imageUrl');

    return usersSessions;
  }

  async getSessionById(sessionId: string): Promise<TeamSession> {
    const session = await this.sessionModel
      .findById(sessionId)
      .populate('mentor', 'firdtName lastName email imageUrl')
      .populate('mentees', 'firstName lastName email imageUrl')
      .populate('comments.author', 'firstName lastName email imageUrl');
    if (!session) throw new NotFoundException('Session not found');
    return session;
  }

  async addComment(
    sessionId: string,
    authorId: string,
    payload: AddCommentDto,
  ): Promise<TeamSession> {
    if (!Types.ObjectId.isValid(authorId)) {
      throw new BadRequestException('Invalid user ID format');
    }

    const objectUserId = new Types.ObjectId(authorId);

    const text = payload.text;
    const session = await this.sessionModel.findByIdAndUpdate(
      sessionId,
      {
        $push: {
          comments: {
            author: objectUserId,
            text,
            createdAt: new Date(),
          },
        },
      },
      { new: true },
    );

    if (!session) throw new NotFoundException('Session not found');

    return session.populate(
      'comments.author',
      'firstName lastName email imageUrl',
    );
  }

  async closeSession(
    sessionId: string,
    mentorId: string,
  ): Promise<TeamSession> {
    if (!Types.ObjectId.isValid(mentorId)) {
      throw new BadRequestException('Invalid user ID format');
    }

    const objectUserId = new Types.ObjectId(mentorId);

    const session = await this.sessionModel.findById(sessionId);

    if (!session) throw new NotFoundException('Session not found');
    console.log(session.mentor, objectUserId);
    if (!session.mentor.equals(objectUserId)) {
      throw new ForbiddenException('Only the mentor can close the session');
    }

    session.isClosed = true;
    await session.save();
    await session.populate('mentor', 'firstName lastName email imageUrl');
    await session.populate('mentees', 'firstName lastName email imageUrl');
    await session.populate(
      'comments.author',
      'firstName lastName email imageUrl',
    );

    return session;
  }
}
