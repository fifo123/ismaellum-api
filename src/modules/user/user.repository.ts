import { SignUpUser } from '@/common/domain/dtos/user/sign-up-user.dto';
import { User } from '@/common/domain/models';
import { UserEntity } from '@/infra/typeorm/entities';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findUserByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      throw new HttpException('Error in DB, could not find user by email', 500);
    }
  }

  async signUp(data: SignUpUser): Promise<User> {
    try {
      const user = this.userRepository.create(data);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new HttpException('Error in DB, could not sign up user', 500);
    }
  }
}
