import { CreateProcedure } from '@/common/domain/dtos/procedure/create-procedure.dto';
import { Procedure } from '@/common/domain/models/procedure.model';
import { Injectable } from '@nestjs/common';
import { ProcedureRepository } from './procedure.repository';

@Injectable()
export class ProcedureService {
  constructor(private readonly procedureRepository: ProcedureRepository) {}

  async createProcedure(data: CreateProcedure): Promise<Procedure> {
    return this.procedureRepository.createProcedure(data);
  }
}
