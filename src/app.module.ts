import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crud1 } from './crud1/entities/crud1.entity';
import { Crud1Module } from './crud1/crud1.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "basecrud1",
      entities: [Crud1],
      synchronize: true
    }),
    Crud1Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
