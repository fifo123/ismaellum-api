import { User } from '@/common/models';
import { UserRepository } from '@/modules/user/user.repository';
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findUserByEmail(email);
    const compare = await crypto.compare(password, user.password);
    if (user && compare) return user;
    return null;
  }

  async login(email: string, password: string) {
    const validateUser = await this.validateUser(email, password);
    if (!validateUser) throw new HttpException('User or password wrong', 401);
    const accessToken = this.jwtService.sign({
      user_id: validateUser.user_id,
      email: validateUser.email,
    });
    delete validateUser.password;
    return {
      accessToken,
      ...validateUser,
    };
  }
}
