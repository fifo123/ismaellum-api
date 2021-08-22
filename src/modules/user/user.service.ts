import { SignUpUser } from '@/common/domain/dtos/user/';
import { User } from '@/common/domain/models';
import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(data: SignUpUser): Promise<User> {
    const emailInUse = await this.userRepository.findUserByEmail(data.email);
    if (emailInUse)
      throw new HttpException('Error: Email already in use.', 400);
    return this.userRepository.signUp(data);
  }
}
