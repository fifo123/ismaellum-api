import { ProcedureHistoryEntity } from '@/infra/typeorm/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from '../events/events.module';
import { ProcedureHistoryController } from './procedure-history.controller';
import { ProcedureHistoryRepository } from './procedure-history.repository';
import { ProcedureHistoryService } from './procedure-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcedureHistoryEntity]), EventsModule],
  providers: [ProcedureHistoryService, ProcedureHistoryRepository],
  exports: [ProcedureHistoryService],
  controllers: [ProcedureHistoryController],
})
export class ProcedureHistoryModule {}
