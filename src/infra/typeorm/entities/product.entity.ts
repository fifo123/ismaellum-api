import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductHistoryEntity } from './product-history.entity';

@Entity('Product')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  product_id: number;

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
    name: 'credits_price',
    nullable: false,
  })
  creditsPrice: number;

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

  @OneToMany(() => ProductHistoryEntity, (productsHistory) => productsHistory.user, {
    nullable: true,
  })
  products?: ProductHistoryEntity[];
}
