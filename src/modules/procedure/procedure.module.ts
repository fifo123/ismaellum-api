import { ProcedureEntity } from '@/infra/typeorm/entities/procedure.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcedureController } from './procedure.controller';
import { ProcedureRepository } from './procedure.repository';
import { ProcedureService } from './procedure.service';

@Module({
  controllers: [ProcedureController],
  imports: [TypeOrmModule.forFeature([ProcedureEntity])],
  providers: [ProcedureService, ProcedureRepository],
})
export class ProcedureModule {}
