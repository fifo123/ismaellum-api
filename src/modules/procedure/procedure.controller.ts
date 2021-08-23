import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { multerStorageConfig } from '@/common/constants/multer-storage.config';
import { CreateProcedure } from '@/common/domain/dtos/procedure/create-procedure.dto';
import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProcedureService } from './procedure.service';

@Controller('procedure')
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('picture', multerStorageConfig))
  @Post('/create-procedure')
  async createProcedure(
    @UploadedFile() file: any,
    @Body() data: CreateProcedure,
  ) {
    if (!file?.filename)
      throw new HttpException('Error: picture is required', 400);
    return this.procedureService.createProcedure({
      ...data,
      picture: `${file.filename}`,
    });
  }
}
