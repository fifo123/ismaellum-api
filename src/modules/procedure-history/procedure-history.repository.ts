import { CreateProcedureEvent } from '@/common/domain/dtos/procedure-history/procedure-history-event.dto';
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
        relations: ['procedure'],
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

  async createProcedureEvent(
    data: CreateProcedureEvent,
  ): Promise<ProcedureHistory> {
    try {
      const createEvent = this.procedureHistoryRepository.create({
        ...data,
        user: {
          user_id: data.user_id,
        },
        procedure: {
          procedure_id: data.procedure_id,
        },
      });
      const saveEvent = await this.procedureHistoryRepository.save(createEvent);
      return this.adapter(saveEvent);
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not create procedure event',
        500,
      );
    }
  }

  private adapter(procedure: ProcedureHistoryEntity): ProcedureHistory {
    return {
      ...procedure,
      totalXp:
        this.getValue(procedure.procedure.xpValue, procedure.percent) || 0,
      totalCredits:
        this.getValue(procedure.procedure.creditsValue, procedure.percent) || 0,
    };
  }

  private map(procedures: ProcedureHistoryEntity[]): ProcedureHistory[] {
    return procedures.map((procedure) => this.adapter(procedure));
  }

  private getValue(value: number, percent: number): number {
    return +((percent / 100) * value).toFixed(0);
  }
}