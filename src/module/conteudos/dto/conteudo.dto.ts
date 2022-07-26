import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType} from '@nestjs/graphql';
import { BaseDTO } from 'src/module/bases/dto/base.dto';
import { LessonDTO } from 'src/module/lessons/dto/lesson.dto';


@ObjectType('Conteudo')
@FilterableRelation('lesson', () => LessonDTO)
export class ConteudoDTO extends BaseDTO {
  @FilterableField({nullable:true})
  description: string;

  @FilterableField({nullable:true})
  linkContent:string
}
