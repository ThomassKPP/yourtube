import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { randomInt } from 'crypto';

export type videosDocument = videos & Document;

@Schema()
export class videos {
  @Factory((faker) => faker.lorem.words(2))
  @Prop()
  title: string;

  @Factory((faker) => faker.lorem.words(15))
  @Prop()
  description: string;

  @Factory((faker) => faker.image.imageUrl())
  @Prop()
  image: string;

  @Factory((faker) => faker.lorem.words(1))
  @Prop()
  channel: string;

  @Factory((faker) => randomInt(200, 2000000))
  @Prop()
  views: number;

  @Prop()
  date: Date;
}

export const videosSchema = SchemaFactory.createForClass(videos);
