import { MakeLogin } from '@/common/domain/dtos/auth/make-login.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Query(() => Boolean)
  graphqlHealth(): boolean {
    return true;
  }

  @Mutation(() => String)
  async login(@Args('login') data: MakeLogin): Promise<string> {
    const { accessToken } = await this.authService.login(
      data.email,
      data.password,
    );
    return accessToken;
  }
}
