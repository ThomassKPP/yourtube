import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { videos, videosDocument } from './videos.entity';
import { Model } from 'mongoose';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel(videos.name)
    private readonly videosModel: Model<videosDocument>,
  ) {}

  find(options) {
    return this.videosModel.find(options);
  }
}
