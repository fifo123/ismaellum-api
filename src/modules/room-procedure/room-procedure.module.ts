import { RoomProcedureEntity } from '@/infra/typeorm/entities/room-procedure.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomProcedureRepository } from './room-procedure.repository';
import { RoomProcedureResolver } from './room-procedure.resolver';
import { RoomProcedureService } from './room-procedure.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomProcedureEntity])],
  providers: [RoomProcedureService, RoomProcedureRepository, RoomProcedureResolver],
})
export class RoomProcedureModule {}
