import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

//commande pour créer un module nest g mo todos

@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
