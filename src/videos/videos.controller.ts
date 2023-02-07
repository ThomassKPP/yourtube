import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs/promises';

@Controller('video')
export class VideoController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Res() res) {
    console.log(file);
    await fs.writeFile(`./uploads/${file.originalname}`, file.buffer);
    return res.sendStatus(201);
  }

  @Get(':filepath')
  seeuploadedFile(@Param('filepath') file, @Res() res) {
    return res.sendFile(file, { root: './uploads' });
  }
}
