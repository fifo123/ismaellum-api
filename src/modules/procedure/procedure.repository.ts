import { CreateProcedure } from '@/common/domain/dtos/procedure/create-procedure.dto';
import { Procedure } from '@/common/domain/models/procedure.model';
import { ProcedureEntity } from '@/infra/typeorm/entities/procedure.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProcedureRepository {
  constructor(
    @InjectRepository(ProcedureEntity)
    private readonly procedureRepository: Repository<ProcedureEntity>,
  ) {}

  async createProcedure(data: CreateProcedure): Promise<Procedure> {
    try {
      const procedure = this.procedureRepository.create(data);
      return await this.procedureRepository.save(procedure);
    } catch (error) {
      throw new HttpException('Error in DB, could not create procedure', 500);
    }
  }
}
