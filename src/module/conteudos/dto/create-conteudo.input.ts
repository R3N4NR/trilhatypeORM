import { InputType, Field } from '@nestjs/graphql';
import { UpdateLessonInput } from 'src/module/lessons/dto/update-lesson.input';

@InputType()
export class CreateConteudoInput {
  @Field(() => String, {nullable:true})
  description: string;

  @Field(() => String, {nullable:true})
  linkContent:string

  @Field(() => UpdateLessonInput)
  lesson?: UpdateLessonInput;
}
