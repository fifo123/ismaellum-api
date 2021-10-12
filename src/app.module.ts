import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { typeOrmConfigFactory } from './config/typeormConfig.factory';
import { EventsModule } from './modules/events/events.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLError } from 'graphql';
import { ProcedureModule } from './modules/procedure/procedure.module';
import { ProcedureHistoryModule } from './modules/procedure-history/procedure-history.module';
import { ProductModule } from './modules/products/product.module';
import { RoomModule } from './modules/room/room.module';
import { FavoriteRoomModule } from './modules/favorite-room/favorite-room.module';
import { ProductHistoryModule } from './modules/product-history/product-history.module';

@Module({
  imports: [
    EventsModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => typeOrmConfigFactory(),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          statusCode: error.extensions?.exception?.status,
          message:
            error.extensions?.exception?.response?.message ||
            error?.extensions?.exception?.stacktrace?.[0] ||
            '-',
          code:
            error.extensions?.exception?.response?.code ||
            error.extensions?.code ||
            '-',
        };
        return graphQLFormattedError;
      },
      fieldResolverEnhancers: ['guards'],
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthModule,
    ProcedureModule,
    ProcedureHistoryModule,
    ProductModule,
    RoomModule,
    FavoriteRoomModule,
    ProductHistoryModule
  ],
  controllers: [AppController],
})
export class AppModule {}
