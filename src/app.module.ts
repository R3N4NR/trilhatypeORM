import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { StudentsModule } from './module/students/students.module';
import { DisciplinesModule } from './module/disciplines/disciplines.module';
import { LessonsModule } from './module/lessons/lessons.module';
import { ConteudosModule } from './module/conteudos/conteudos.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      
      
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'admin',
      database: 'test',
      entities: ['../**/entities/**/*.js'],
      synchronize: true,
      logging:true
    }),
    StudentsModule,
    DisciplinesModule,
    LessonsModule,
    ConteudosModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}


    