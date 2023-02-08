import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { VideoModule } from './video/videos.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    VideosModule,
    VideoModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/users'),
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
