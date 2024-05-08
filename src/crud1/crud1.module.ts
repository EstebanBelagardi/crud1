import { Module } from '@nestjs/common';
import { Crud1Service } from './crud1.service';
import { Crud1Controller } from './crud1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crud1 } from './entities/crud1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crud1])],
  controllers: [Crud1Controller],
  providers: [Crud1Service],
})
export class Crud1Module {}
