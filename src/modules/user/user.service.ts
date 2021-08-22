import { SignUpUser } from '@/common/domain/dtos/user/sign-up-user.dto';
import { User } from '@/common/domain/models';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(data: SignUpUser): Promise<User> {
    return this.userRepository.signUp(data);
  }
}
