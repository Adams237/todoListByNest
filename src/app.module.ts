import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TodosModule, 
    MongooseModule.forRoot('mongodb+srv://adams:adams@cluster0.vhrl4rs.mongodb.net/testNestjs?retryWrites=true&w=majority'), 
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
