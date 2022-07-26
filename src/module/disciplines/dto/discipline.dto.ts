import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseDTO } from 'src/module/bases/dto/base.dto';


@ObjectType()
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name:string;
  
}
