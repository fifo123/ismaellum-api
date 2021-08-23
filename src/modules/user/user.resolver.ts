import { SignUpUser } from '@/common/domain/dtos/user/';
import { ProcedureHistory, User } from '@/common/domain/models';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async signUpUser(@Args('data') data: SignUpUser): Promise<User> {
    return this.userService.signUp(data);
  }

  @ResolveField(() => [ProcedureHistory], {
    nullable: true,
  })
  async proceduresHistory(@Parent() user: User): Promise<ProcedureHistory[]> {
    return this.userService.proceduresHistory(user.user_id);
  }
}
