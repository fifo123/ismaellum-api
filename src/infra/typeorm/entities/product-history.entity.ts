import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';

@Entity('ProductHistory')
export class ProductHistoryEntity {
  @PrimaryGeneratedColumn('increment')
  product_history_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.products, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => ProductEntity, (product) => product.products, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
  })
  product: ProductEntity;
}
