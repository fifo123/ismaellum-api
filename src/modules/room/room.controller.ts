import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { multerStorageConfig } from '@/common/constants/multer-storage.config';
import { CreateRoom } from '@/common/domain/dtos/room/create-room.dto';
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
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('picture', multerStorageConfig))
  @Post('/create-room')
  async createRoom(
    @UploadedFile() file: any,
    @Body() data: CreateRoom,
  ) {
    if (!file?.filename)
      throw new HttpException('Error: picture is required', 400);
    return this.roomService.createRoom({
      ...data,
      picture: `${file.filename}`,
    });
  }
}
