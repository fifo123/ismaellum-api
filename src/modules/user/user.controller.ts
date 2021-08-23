import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { multerStorageConfig } from '@/common/constants/multer-storage.config';
import { UserLogged } from '@/common/decorators/user-logged.decorator';
import { LoggedUser } from '@/common/domain/interfaces/auth';
import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('picture', multerStorageConfig))
  @Post('/update-profile-picture')
  async updateProfilePicture(
    @UploadedFile() { filename }: any,
    @UserLogged() { user_id }: LoggedUser,
  ) {
    await this.userService.updateProfilePicture(user_id, filename);
    return {
      updated: true,
    };
  }
}
