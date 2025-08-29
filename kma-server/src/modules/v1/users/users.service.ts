/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/users.schema';
import { AssignMenteeDto, UpdateUserDto } from './dto/users.dto';
import { RoleEnum } from '../../../common/enums/roles.enum';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOrCreateUser(clerkUser: any): Promise<User> {
    const { id, emailAddresses, first_name, last_name, image_url } = clerkUser;
    const email =
      Array.isArray(emailAddresses) && emailAddresses.length > 0
        ? emailAddresses[0].emailAddress
        : null;

    let user = await this.userModel.findOne({ clerkId: id });

    if (!user) {
      user = new this.userModel({
        clerkId: id,
        email,
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url,
      });
      await user.save();
    }

    console.log('this is from usersService SUCCESS:', user);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async updateUser(payload: UpdateUserDto, userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    Object.keys(payload).forEach((key) => {
      if (payload[key] !== undefined) {
        (user as any)[key] = payload[key];
      }
    });

    await user.save();

    console.log('User updated:', user);

    return user;
  }

  async assignMentee(payload: AssignMenteeDto): Promise<User> {
    const mentor = await this.userModel.findById(payload.mentorId);
    if (!mentor) {
      throw new NotFoundException('Mentor not found');
    }

    if (!mentor.role.includes(RoleEnum.MENTOR)) {
      throw new BadRequestException('Only mentors can have mentees');
    }

    const mentee = await this.userModel.findById(payload.menteeId);
    if (!mentee) {
      throw new NotFoundException('Mentee not found');
    }
    if (!mentee.role.includes(RoleEnum.MENTEE)) {
      throw new BadRequestException('Only users can be assigned as mentees');
    }

    // Prevent duplicates
    if (mentor.mentees.includes(mentee._id)) {
      throw new BadRequestException(
        'Mentee is already assigned to this mentor',
      );
    }

    mentor.mentees.push(mentee._id);
    await mentor.save();

    return mentor.populate('mentees');
  }

  async changeUserRole(userId: string, newRole: RoleEnum) {
    if (!Object.values(RoleEnum).includes(newRole)) {
      throw new Error(`Invalid role: ${newRole}`);
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { role: newRole } },
      { new: true },
    );

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }
}
