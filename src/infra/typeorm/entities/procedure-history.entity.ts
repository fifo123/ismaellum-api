import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProcedureEntity } from './procedure.entity';
import { RoomEntity } from './room.entity';
import { UserEntity } from './user.entity';

@Entity('ProcedureHistory')
export class ProcedureHistoryEntity {
  @PrimaryGeneratedColumn('increment')
  procedure_history_id: number;

  @Column({
    type: 'float',
    nullable: false,
  })
  percent: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.procedures, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => ProcedureEntity, (procedure) => procedure.procedures, {
    nullable: false,
  })
  @JoinColumn({
    name: 'procedure_id',
  })
  procedure: ProcedureEntity;

  @ManyToOne(() => RoomEntity, (room) => room.history, {
    nullable: true,
  })
  @JoinColumn({
    name: 'room_id',
  })
  room?: RoomEntity;
}
