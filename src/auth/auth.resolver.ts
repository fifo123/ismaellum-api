import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  @Query(() => Boolean)
  graphqlHealth(): boolean {
    return true;
  }
}
