import { ProcedureHistory } from '@/common/domain/models';
import { ProcedureHistoryEntity } from '@/infra/typeorm/entities';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProcedureHistoryRepository {
  constructor(
    @InjectRepository(ProcedureHistoryEntity)
    private readonly procedureHistoryRepository: Repository<ProcedureHistoryEntity>,
  ) {}

  async getProceduresByUserId(user_id: number): Promise<ProcedureHistory[]> {
    try {
      const procedures = await this.procedureHistoryRepository.find({
        where: {
          user: {
            user_id,
          },
        },
      });
      return this.map(procedures || []);
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not find procedure by user id',
        500,
      );
    }
  }

  private adapter(procedure: ProcedureHistoryEntity): ProcedureHistory {
    return {
      ...procedure,
      totalXp: (procedure.percent / 100) * procedure.procedure.xpValue || 0,
      totalCredits:
        (procedure.percent / 100) * procedure.procedure.creditsValue || 0,
    };
  }

  private map(procedures: ProcedureHistoryEntity[]): ProcedureHistory[] {
    return procedures.map((procedure) => this.adapter(procedure));
  }
}
