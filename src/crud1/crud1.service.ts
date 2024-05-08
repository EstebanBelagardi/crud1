import { Injectable } from '@nestjs/common';
import { CreateCrud1Dto } from './dto/create-crud1.dto';
import { UpdateCrud1Dto } from './dto/update-crud1.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud1 } from './entities/crud1.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Crud1Service {

  constructor (
    @injectRepository(Crud1)
    private crud1Repository:Repository <Crud1>
  )
  async create(createCrud1Dto: CreateCrud1Dto) {
    return await this.crud1Repository.save(createCrud1Dto);
  }

  async findAll() {
    return await this.crud1Repository.find();
  }

  async findOne(id: number) {
    return await this.crud1Repository.findOneBy({id});
  }

  async update(id: number, updateCrud1Dto: UpdateCrud1Dto) {
    return await this.crud1Repository.update(id, updateCrud1Dto);
  }

  async remove(id: number) {
    return await this.crud1Repository.delete(id);
  }
}
