import { RoomEntity } from '@/infra/typeorm/entities/room.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomProcedureModule } from '../room-procedure/room-procedure.module';
import { RoomController } from './room.controller';
import { RoomRepository } from './room.repository';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

@Module({
  controllers: [RoomController],
  imports: [TypeOrmModule.forFeature([RoomEntity]), RoomProcedureModule],
  providers: [RoomService, RoomRepository, RoomResolver],
})
export class RoomModule {}
