import { BaseEntity } from 'src/module/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Discipline')
export class DisciplineEntity extends BaseEntity {
  @Column()
  name:string;

}
