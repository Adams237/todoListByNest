import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interface/todoInterface';
import { CreateTodoDto } from './dto/CreateTodoDto';

// methode pour créer un service nest g s todos   

@Injectable()
export class TodosService {
     todos: Todo[] =[
        {
            id: 1,
            title: 'todos App',
            description: 'creat nest js app',
            done: false
        },
        {
            id: 2,
            title: 'bread',
            description: 'buy bread',
            done: true
        },
        {
            id: 3,
            title: 'bread',
            description: 'buy bread',
            done: true
        },
    ]
    findAll(): Todo[]{
        return this.todos
    }

    createTodo(todo: CreateTodoDto){
        this.todos = [...this.todos, todo]
    }
    findOne (id: string){
        return this.todos.find(todo=> todo.id === Number(id))
    }

    updateTodo(id: string, todo: Todo){
        console.log(id);
        console.log(todo);
        
        
        //recupérer le todo à mettre à jour
        const todoToUpdate = this.todos.find(todo=> todo.id ===  Number(id))
        if(!todoToUpdate){
            return new NotFoundException('todo non existant')
        }
        //appliquer la notification
        if(todo.hasOwnProperty('done')){
            todoToUpdate.done = todo.done
        }
        if(todo.title){
            todoToUpdate.title = todo.title
        }

        const updateTodos = this.todos.map(t=>t.id !== Number(id) ? t : todoToUpdate)
        this.todos =  updateTodos
        return {updateTodo: 1, todo: todoToUpdate}
    }

    delateTodo(id:string){
        const nbTodoBeforDelete = this.todos.length
        this.todos = [...this.todos.filter(t => t.id !== Number(id))]
        if(this.todos.length < nbTodoBeforDelete){
            return {delateTodos: 1, nbTodos: this.todos.length}
        }
        else{
            return {delateTodos: 0, nbTodos: this.todos.length}
        }
    }
}
