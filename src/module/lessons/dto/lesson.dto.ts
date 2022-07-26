import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/module/bases/dto/base.dto';
import { ConteudoDTO } from 'src/module/conteudos/dto/conteudo.dto';


@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ConteudoDTO, { nullable:true})
export class LessonDTO extends BaseDTO{

  @FilterableField()
  description:string;
}