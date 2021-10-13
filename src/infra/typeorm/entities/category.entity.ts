import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductCategoryEntity } from './product-category.entity';

@Entity('Category')
export class CategoryEntity {
  @PrimaryGeneratedColumn('increment')
  category_id: number;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ProductCategoryEntity, (productCategory) => productCategory.category, {
    nullable: true,
  })
  productCategories?: ProductCategoryEntity[];
}
