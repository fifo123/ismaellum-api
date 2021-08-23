import { ProcedureHistoryEntity } from '@/infra/typeorm/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcedureHistoryRepository } from './procedure-history.repository';
import { ProcedureHistoryService } from './procedure-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcedureHistoryEntity])],
  providers: [ProcedureHistoryService, ProcedureHistoryRepository],
  exports: [ProcedureHistoryService],
})
export class ProcedureHistoryModule {}
