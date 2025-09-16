/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Patch,
} from '@nestjs/common';
import { CurrentUser } from '../../../common/decorators/currentUser.decorator';
import { AssignMenteeDto, UpdateUserDto } from './dto/users.dto';

import { UsersService } from './users.service';
import { RoleEnum } from '../../../common/enums/roles.enum';
import { Public } from '../../../common/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Public()
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get('user/:id')
  async getUserById(@Param('id') userId: string) {
    const user = await this.usersService.getUserById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  @Patch('update-profile')
  async updateProfile(
    @Body() payload: UpdateUserDto,
    @CurrentUser() user: { _id: string },
  ) {
    const userId = user._id.toString();

    if (!userId) {
      throw new NotFoundException('User ID not found in request');
    }
    const updatedUser = await this.usersService.updateUser(payload, userId);
    return updatedUser;
  }

  @Patch('assign-mentee')
  async assignMentee(
    @Body() payload: AssignMenteeDto,
    @CurrentUser() user: { role: string },
  ) {
    if (!user.role.includes(RoleEnum.ADMIN)) {
      throw new ForbiddenException('Only admins can assign mentees');
    }
    return this.usersService.assignMentee(payload);
  }

  @Patch(':id/role')
  async updateRole(@Param('id') userId: string, @Body('role') role: RoleEnum) {
    return this.usersService.changeUserRole(userId, role);
  }
}
