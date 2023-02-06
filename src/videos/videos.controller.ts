import { Controller, Get, Req } from '@nestjs/common';
import { VideosService } from './videos.service';
import { Request } from 'express';

@Controller('yourtube/videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get('frontend')
  async frontend() {
    return this.videosService.find({}).exec();
  }

  @Get('backend')
  async backend(@Req() req: Request) {
    let options = {};

    if (req.query.s) {
      options = {
        $or: [
          { title: new RegExp(req.query.s.toString(), 'i') },
          { description: new RegExp(req.query.s.toString(), 'i') },
        ],
      };
    }

    const query = this.videosService.find(options);

    if (req.query.sort) {
    }

    return query.exec();
  }
}
