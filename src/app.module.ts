import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { typeOrmConfigFactory } from './config/typeormConfig.factory';
import { EventsModule } from './modules/events/events.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    EventsModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => typeOrmConfigFactory(),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
