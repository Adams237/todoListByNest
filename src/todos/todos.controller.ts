import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interface/todoInterface';
import { CreateTodoDto } from './dto/CreateTodoDto';

// commande pour créer un controleur nest g co nom-controlleur

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get()
    findAll() : Todo[]{
        return this.todosService.findAll()
    }

    //@Body permet de recpérer les éléments passés en post
    // un dto permet de définir la structure des éléments que recevra une méthode post
    @Post()
    createTodo (@Body() newTodo : CreateTodoDto){
        console.log(newTodo);
        
        this.todosService.createTodo(newTodo)
    }

    //@Param permet de recupérer un élément passer en paramêtre
    @Get(':id')
    findOne( @Param('id') id: string){
        console.log('id',id);
        return this.todosService.findOne(id)
        
    }

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto){
        return this.todosService.updateTodo(id, todo)
    }

    @Delete(':id')
    deleteTodo(@Param('id') id:string){
        return this.todosService.delateTodo(id)
    }
}
