import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(
    name: string,
    email: string,
    password: string,
  ): Promise<UserDocument> {
    const createdUser = new this.userModel({
      name,
      email,
      password,
    });
    return createdUser.save();
  }
}
