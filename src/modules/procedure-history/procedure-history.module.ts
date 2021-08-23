import { ProcedureHistoryEntity } from '@/infra/typeorm/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcedureHistoryRepository } from './procedure-history.repository';
import { ProcedureHistoryService } from './procedure-history.service';
import { ProcedureHistoryController } from './procedure-history.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProcedureHistoryEntity])],
  providers: [ProcedureHistoryService, ProcedureHistoryRepository],
  exports: [ProcedureHistoryService],
  controllers: [ProcedureHistoryController],
})
export class ProcedureHistoryModule {}
