import { SignUpUser } from '@/common/domain/dtos/user/';
import { User } from '@/common/domain/models';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async signUpUser(@Args('data') data: SignUpUser): Promise<User> {
    return this.userService.signUp(data);
  }
}
