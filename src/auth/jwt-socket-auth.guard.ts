import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class JwtSocketAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType();
    if (type === 'ws') return super.canActivate(context) as Promise<boolean>;

    return super.canActivate(context) as Promise<boolean>;
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      Logger.error('Socket Unauthorized');
      throw err || new WsException('Unauthorized');
    }
    return user;
  }

  getRequest(context: ExecutionContext) {
    const type = context.getType();

    if (type === 'ws') return (context as any).args?.[0].handshake;
    return context;
  }
}
