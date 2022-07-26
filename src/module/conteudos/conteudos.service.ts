import { Injectable } from '@nestjs/common';
import { CreateConteudoInput } from './dto/create-conteudo.input';
import { UpdateConteudoInput } from './dto/update-conteudo.input';

@Injectable()
export class ConteudosService {
  create(createConteudoInput: CreateConteudoInput) {
    return 'This action adds a new conteudo';
  }

  findAll() {
    return `This action returns all conteudos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conteudo`;
  }

  update(id: number, updateConteudoInput: UpdateConteudoInput) {
    return `This action updates a #${id} conteudo`;
  }

  remove(id: number) {
    return `This action removes a #${id} conteudo`;
  }
}
