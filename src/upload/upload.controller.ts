import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Param,
  Res,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
//import * as fs from 'fs/promises';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileAndPassValidation(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1048576 * 20 }), // 20MB
          new FileTypeValidator({ fileType: 'video/mp4' }),
        ],
      }),
    )
    file,
    @Res() res,
  ) {
    console.log(file);
    //await fs.writeFile(`./UploadedFiles/${file.originalname}`, file.buffer);
    return res.sendStatus(201);
  }

  @Get(':filepath')
  seeuploadedFile(@Param('filepath') file, @Res() res) {
    return res.sendFile(file, { root: './UploadedFiles' });
  }

  @Delete(':filepath')
  deleteFile(@Param('filepath') file, @Res() res) {
    return res.sendStatus(200);
  }
}
