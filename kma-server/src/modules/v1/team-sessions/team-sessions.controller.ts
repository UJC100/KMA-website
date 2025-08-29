import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeamSessionsService } from './team-sessions.service';
import { AddCommentDto, TeamSessionDto } from './dto/teamSession.dto';
import { TeamSession } from './schema/sessions.schema';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('team-sessions')
export class TeamSessionsController {
  constructor(private teamsSessionService: TeamSessionsService) {}

  @Post('create-session')
  async createSession(
    @Body() payload: TeamSessionDto,
    @CurrentUser() user: { _id: string },
  ): Promise<TeamSession> {
    return this.teamsSessionService.createSession(payload, user._id);
  }

  @Public()
  @Get()
  async getAllSessions() {
    return this.teamsSessionService.getAllSessions();
  }

  @Get('all-sessions')
  async getAllSessionsForParticipant(@CurrentUser() user: { _id: string }) {
    return await this.teamsSessionService.getAllSessionsForParticipants(
      user._id,
    );
  }

  @Get(':id')
  async getSessionById(@Param('id') sessionId: string) {
    return this.teamsSessionService.getSessionById(sessionId);
  }

  @Post(':id/comments')
  async addComment(
    @Param('id') sessionId: string,
    @Body() payload: AddCommentDto,
    @CurrentUser() authorId: { _id: string },
  ) {
    return await this.teamsSessionService.addComment(
      sessionId,
      authorId._id,
      payload,
    );
  }

  @Post(':id/close-session')
  async closeSession(
    @Param('id') sessionId: string,
    @CurrentUser() user: { _id: string },
  ): Promise<TeamSession> {
    return this.teamsSessionService.closeSession(sessionId, user._id);
  }
}
