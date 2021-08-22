import { multerStorageConfig } from '@/common/constants/multer-storage.config';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(FileInterceptor('picture', multerStorageConfig))
  @Post('/update-profile-picture')
  async updateProfilePicture(@UploadedFile() file: any) {
    console.log(file);
    return {
      updated: true,
    };
  }
}
