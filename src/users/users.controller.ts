import { Controller, Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDetails } from './users-details.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserDetails> {
    return this.usersService.findById(id);
  }
}
