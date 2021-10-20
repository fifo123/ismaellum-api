import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { ProductEntity } from './product.entity';

@Entity('ProductCategory')
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn('increment')
  product_category_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.productCategories, {
    nullable: false,
  })
  @JoinColumn({
    name: 'category_id',
  })
  category: CategoryEntity;

  @ManyToOne(() => ProductEntity, (product) => product.productCategories, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
  })
  product: ProductEntity;
}
