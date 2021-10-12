import { JwtSocketAuthGuard } from '@/auth/jwt-socket-auth.guard';
import { UserLogged } from '@/common/decorators/user-logged.decorator';
import { LoggedUser } from '@/common/domain/interfaces/auth';
import { Logger, UseFilters, UseGuards } from '@nestjs/common';
import {
  BaseWsExceptionFilter,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('EventsGateway');

  @UseFilters(new BaseWsExceptionFilter())
  @UseGuards(JwtSocketAuthGuard)
  @SubscribeMessage('msgToServer')
  handleMessage(
    client: Socket,
    payload: any,
    @UserLogged() user: LoggedUser,
  ): void {
    try {
      this.logger.verbose(
        `User: ${user.user_id} - ${user.email} has sent a message`,
      );
      this.logger.log(
        `Client: ${client.id}, emitted: ${
          payload.api?.status || 'Veio vazio'
        } `,
      );
      this.server.emit('msgToClient', payload);
    } catch (error) {
      this.logger.error(`Client: ${client.id}, emitted: ${payload} `);
      throw new WsException('Invalid credentials.');
    }
  }

  afterInit(server: Server) {
    this.logger.log(`Gateway initialized in port: ${3000}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
