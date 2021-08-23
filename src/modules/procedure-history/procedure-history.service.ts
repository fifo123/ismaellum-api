import { ProcedureHistory } from '@/common/domain/models';
import { Injectable } from '@nestjs/common';
import { ProcedureHistoryRepository } from './procedure-history.repository';

@Injectable()
export class ProcedureHistoryService {
  constructor(
    private readonly procedureHistoryRepository: ProcedureHistoryRepository,
  ) {}

  async getProceduresByUserId(user_id: number): Promise<ProcedureHistory[]> {
    return this.procedureHistoryRepository.getProceduresByUserId(user_id);
  }
}
