import { BaseEntity } from 'src/module/bases/entities/base.entity';
import { DisciplineEntity } from 'src/module/disciplines/entities/discipline.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Student extends BaseEntity{
  
  @Column()
  name: string;

  @Column()
  key:string;
  @ManyToMany(() => DisciplineEntity, disciplines => disciplines.students, {nullable:true})
  disciplines:DisciplineEntity[]
}
