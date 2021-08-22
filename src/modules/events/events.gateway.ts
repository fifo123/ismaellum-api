import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('EventsGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any): void {
    try {
      this.logger.log(
        `Client: ${client.id}, emitted: ${
          payload.api?.status || 'Veio vazio'
        } `,
      );
      this.server.emit('msgToClient', payload);
    } catch (error) {
      console.log(error);
      this.logger.error(`Client: ${client.id}, emitted: ${payload} `);
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
