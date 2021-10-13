import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCategory {
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: false })
  name: string;
}
