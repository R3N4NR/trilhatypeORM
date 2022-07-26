import { Module } from '@nestjs/common';
import { DisciplineDTO } from './dto/discipline.dto';
import { UpdateDisciplineInput } from './dto/update-discipline.input';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { DisciplineEntity } from './entities/discipline.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
    
      imports: [NestjsQueryTypeOrmModule.forFeature([DisciplineEntity])],
      
      resolvers: [{ 
        DTOClass: DisciplineDTO, 
        EntityClass: DisciplineEntity,
        CreateDTOClass:CreateDisciplineInput,
      UpdateDTOClass: UpdateDisciplineInput,
      enableTotalCount:true,
      pagingStrategy:PagingStrategies.OFFSET,
     },
      ],
    }),
  ],
  providers: [],
})
export class DisciplinesModule {}
