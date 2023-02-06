import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDetails } from './users-details.interface';
import { AuthGuard } from '@nestjs/passport';
import { UpdateProfileDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  profileService: any;
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserDetails> {
    return this.usersService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  async updateProfile(@Req() request, @Body() updateDto: UpdateProfileDto) {
    const userId = request.user.userId;
    return this.profileService.updateProfile(userId, updateDto);
  }
}
