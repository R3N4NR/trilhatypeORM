import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType} from '@nestjs/graphql';
import { BaseDTO } from 'src/module/bases/dto/base.dto';
import { StudentDTO } from 'src/module/students/dto/student.dto';


@ObjectType()
@FilterableOffsetConnection('students', () => StudentDTO,)
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name:string;
  
}
