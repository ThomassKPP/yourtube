import { seeder } from 'nestjs-seeder';
import { videosSeeder } from './videos.seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { videos, videosSchema } from './videos.entity';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/users'),
    MongooseModule.forFeature([{ name: videos.name, schema: videosSchema }]),
  ],
}).run([videosSeeder]);
