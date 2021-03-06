import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProcedureHistoryEntity } from './procedure-history.entity';

@Entity('Procedure')
export class ProcedureEntity {
  @PrimaryGeneratedColumn('increment')
  procedure_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'int',
    name: 'credits_value',
    nullable: false,
  })
  creditsValue: number;

  @Column({
    type: 'int',
    name: 'xp_value',
    nullable: false,
  })
  xpValue: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'picture',
    nullable: false,
  })
  picture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ProcedureHistoryEntity, (procedure) => procedure.procedure, {
    nullable: true,
  })
  procedures?: ProcedureHistoryEntity[];
}
