import { Seeder, DataFactory } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { videos, videosDocument } from './videos.entity';
import { Model } from 'mongoose';

export class videosSeeder implements Seeder {
  constructor(
    @InjectModel(videos.name)
    private readonly videosModel: Model<videosDocument>,
  ) {}

  drop(): Promise<any> {
    return this.videosModel.deleteMany({}) as any;
  }

  seed(): Promise<any> {
    const Videos: any = DataFactory.createForClass(videos).generate(50);

    return this.videosModel.insertMany(Videos);
  }
}
