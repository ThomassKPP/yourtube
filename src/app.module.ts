import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, 
    VideosModule,
    MongooseModule.forRoot('mongodb://localhost/nest_search',{autoCreate: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
