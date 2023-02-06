import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideosController } from './videos.controller';
import { videos, videosSchema } from './videos.entity';
import { VideosService } from './videos.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name: videos.name, schema: videosSchema}])
  ],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
