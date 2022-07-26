import { Module } from '@nestjs/common';
import { ConteudoDTO } from './dto/conteudo.dto';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Conteudo } from './entities/conteudo.entity';
import { CreateConteudoInput } from './dto/create-conteudo.input';
import { UpdateConteudoInput } from './dto/update-conteudo.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
    
      imports: [NestjsQueryTypeOrmModule.forFeature([Conteudo])],
      
      resolvers: [{ 
        DTOClass: ConteudoDTO, 
        EntityClass: Conteudo,
        CreateDTOClass:CreateConteudoInput,
      UpdateDTOClass: UpdateConteudoInput,
      enableTotalCount:true,
      pagingStrategy:PagingStrategies.OFFSET,
     },
      ],
    }),
  ],
  providers: [],
})
export class ConteudosModule {}
