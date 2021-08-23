import { CreateProcedureEvent } from '@/common/domain/dtos/procedure-history/procedure-history-event.dto';
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

  async createProcedureEvent(
    data: CreateProcedureEvent,
  ): Promise<ProcedureHistory> {
    return this.procedureHistoryRepository.createProcedureEvent(data);
  }

  async getUserCredits(user_id: number): Promise<number> {
    return this.procedureHistoryRepository.getUserCredits(user_id);
  }

  async getUserTotalXp(user_id: number): Promise<number> {
    return this.procedureHistoryRepository.getUserTotalXp(user_id);
  }
}
