import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/module/bases/dto/base.dto';
import { BaseEntity } from 'src/module/bases/entities/base.entity';


@ObjectType('Student')
export class StudentDTO extends BaseDTO{
 
  @FilterableField()
  name: string;

  @FilterableField()
  key:string;
}
