import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserLogged } from '@/common/decorators/user-logged.decorator';
import { SignUpUser } from '@/common/domain/dtos/user/';
import { LoggedUser } from '@/common/domain/interfaces/auth';
import { ProcedureHistory, User } from '@/common/domain/models';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
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

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  async user(@UserLogged() { user_id }: LoggedUser): Promise<User> {
    return this.userService.getUserById(user_id);
  }

  @ResolveField(() => [ProcedureHistory], {
    nullable: true,
  })
  async proceduresHistory(@Parent() user: User): Promise<ProcedureHistory[]> {
    return this.userService.proceduresHistory(user.user_id);
  }
}
