import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schemas';
import { createUserDto } from './dto/createUserDto';
import { UpdateDto } from './dto/UpdateDto';

@Injectable()
export class UsersService {
    constructor( @InjectModel(User.name) private userModel : Model<User>){}


    createUser( createUserDto: createUserDto ){
        const newUser = new this.userModel(createUserDto)
        return newUser.save()
    }

    getUser(){
        return this.userModel.find();
    }

    getUserById(id:string){
        return this.userModel.findById(id)
    }

    updateUSer(id: string, updateDato: UpdateDto){
        return this.userModel.findByIdAndUpdate(id,  updateDato, {new: true})
    }

    deleteUser(id: string) 
    {
        return this.userModel.findByIdAndDelete(id)
    }

}
