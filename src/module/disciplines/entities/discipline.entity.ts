import { BaseEntity } from 'src/module/bases/entities/base.entity';
import { Student } from 'src/module/students/entities/student.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('Discipline')
export class DisciplineEntity extends BaseEntity {
  @Column()
  name:string;
  @ManyToMany(() => Student, (students) => students.disciplines, { nullable:true,})
  @JoinTable()
  students:Student[]

}
