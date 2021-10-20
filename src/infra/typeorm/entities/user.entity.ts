import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as crypto from 'bcrypt';
import { ProcedureHistoryEntity } from './procedure-history.entity';
import { FavoriteRoomEntity } from './favorite-room.entity';
import { ProductHistoryEntity } from './product-history.entity';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'profile_uri',
    length: 255,
    nullable: true,
  })
  profileUri: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    this.password = await crypto.hash(this.password, 8);
  }

  @BeforeUpdate()
  async beforeUpdate(): Promise<void> {
    this.password = await crypto.hash(this.password, 8);
  }

  @OneToMany(() => ProcedureHistoryEntity, (procedure) => procedure.user, {
    nullable: true,
  })
  procedures?: ProcedureHistoryEntity[];

  @OneToMany(() => ProductHistoryEntity, (productsHistory) => productsHistory.user, {
    nullable: true,
  })
  products?: ProductHistoryEntity[];

  @OneToMany(() => FavoriteRoomEntity, (favoriteRoom) => favoriteRoom.user, {
    nullable: true,
  })
  favoriteRooms?: FavoriteRoomEntity[];
}
