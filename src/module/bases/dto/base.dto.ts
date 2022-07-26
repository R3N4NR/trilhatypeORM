import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class BaseDTO {
  @Field()
  id:string;
  @FilterableField()
  createdAt: Date;
  @FilterableField()
  updatedAt: Date;
  @FilterableField()
  deletedAat:Date;
}
