import { FavoriteRoomEntity } from '@/infra/typeorm/entities/favorite-room.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteRoomController } from './favorite-room.controller';
import { FavoriteRoomRepository } from './favorite-room.repository';
import { FavoriteRoomResolver } from './favorite-room.resolver';
import { FavoriteRoomService } from './favorite-room.service';
@Module({
  imports: [TypeOrmModule.forFeature([FavoriteRoomEntity])],
  providers: [FavoriteRoomService, FavoriteRoomRepository, FavoriteRoomResolver],
  exports: [FavoriteRoomService],
  controllers: [FavoriteRoomController],
})
export class FavoriteRoomModule {}
