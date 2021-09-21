import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Room')
export class RoomEntity {
  @PrimaryGeneratedColumn('increment')
    room_id: number;

   @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  number: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

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
}
