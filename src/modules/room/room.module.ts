import { RoomEntity } from '@/infra/typeorm/entities/room.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './room.controller';
import { RoomRepository } from './room.repository';
import { RoomService } from './room.service';

@Module({
  controllers: [RoomController],
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  providers: [RoomService, RoomRepository],
})
export class RoomModule {}
