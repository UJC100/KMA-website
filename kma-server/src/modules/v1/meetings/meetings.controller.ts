/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { MeetingDto } from './dto/meetings.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('meetings')
export class MeetingsController {
    constructor(private meetingsService: MeetingsService){}

    @Public()
    @Post()
    async createMeeting(
        @Body() data: MeetingDto
    ) {
        return this.meetingsService.createMeeting(data)
    }

    @Get()
    async findAllMeetings() {
        return this.meetingsService.findAllMeetings()
    }

    @Get(':id')
    async findMeeting(@Param('id') id: string) {
        return this.meetingsService.findOneMeeting(id)
    }

}
