import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserLogged } from '@/common/decorators/user-logged.decorator';
import { SignUpUser } from '@/common/domain/dtos/user/';
import { LoggedUser } from '@/common/domain/interfaces/auth';
import { ProcedureHistory, User } from '@/common/domain/models';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
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

  @ResolveField(() => Int, {
    nullable: true,
  })
  async credits(@Parent() user: User): Promise<number> {
    return this.userService.getUserCredits(user.user_id);
  }

  @ResolveField(() => Int, {
    nullable: true,
  })
  async totalXp(@Parent() user: User): Promise<number> {
    return this.userService.getUserTotalXp(user.user_id);
  }

  @ResolveField(() => Int, {
    nullable: true,
  })
  async level(@Parent() user: User): Promise<number> {
    return this.userService.getUserLevel(user.user_id);
  }

  @ResolveField(() => Int, {
    nullable: true,
  })
  async currentXp(@Parent() user: User): Promise<number> {
    return this.userService.getUserCurrentXp(user.user_id);
  }
}
