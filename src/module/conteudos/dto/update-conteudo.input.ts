import { CreateConteudoInput } from './create-conteudo.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateConteudoInput extends PartialType(CreateConteudoInput) {
  @Field(() => ID, {nullable:true})
  id?: string;

 
}
