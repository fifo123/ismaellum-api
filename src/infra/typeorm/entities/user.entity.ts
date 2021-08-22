import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as crypto from 'bcrypt';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'profile_uri',
    length: 255,
  })
  profileUri: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    this.password = await crypto.hash(this.password, 8);
  }

  @BeforeUpdate()
  async beforeUpdate(): Promise<void> {
    this.password = await crypto.hash(this.password, 8);
  }
}
