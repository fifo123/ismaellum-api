import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType();
    if (type === 'ws') return super.canActivate(context) as Promise<boolean>;
    if (type !== 'http') {
      GqlExecutionContext.create(context);
    }

    return super.canActivate(context) as Promise<boolean>;
  }

  handleRequest(err: any, user: any, ctx) {
    if (err || !user) {
      throw err || new HttpException('Unauthorized', 401);
    }
    return user;
  }

  getRequest(context: ExecutionContext) {
    const type = context.getType();

    if (type === 'ws') return (context as any).args?.[0].handshake;
    if (type !== 'http') {
      const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req;
    } else {
      return (context as any).args?.[0];
    }
  }
}
