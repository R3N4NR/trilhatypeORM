import { BaseEntity } from 'src/module/bases/entities/base.entity';

import { Conteudo } from 'src/module/conteudos/entities/conteudo.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity{

  @Column()
  description:string;

  @OneToMany(() => Conteudo, contents => contents.lesson)
  contents: Conteudo[];
}
