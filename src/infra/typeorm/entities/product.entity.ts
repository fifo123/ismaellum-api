import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
