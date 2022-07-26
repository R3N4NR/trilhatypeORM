import { BaseEntity } from 'src/module/bases/entities/base.entity';
import { Lesson } from 'src/module/lessons/entities/lesson.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Conteudo extends BaseEntity {
  @Column()
  description: string;

  @Column({nullable:true})
  linkContent:string

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  @Column({nullable:true})
  lessonId?: string;
}
