import { UserEntity } from '@/infra/typeorm/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';
import { ProcedureHistoryModule } from '../procedure-history/procedure-history.module';
import { FavoriteRoomModule } from '../favorite-room/favorite-room.module';

@Module({
  providers: [UserRepository, UserService, UserResolver],
  imports: [TypeOrmModule.forFeature([UserEntity]), ProcedureHistoryModule, FavoriteRoomModule],
  exports: [UserRepository],
  controllers: [UserController],
})
export class UserModule {}
