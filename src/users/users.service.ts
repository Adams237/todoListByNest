import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schemas';
import { createUserDto } from './dto/createUserDto';
import { UpdateDto } from './dto/UpdateDto';
import { UserSetting } from 'src/schemas/UserSetting.schemas';

@Injectable()
export class UsersService {
    constructor( @InjectModel(User.name) private userModel : Model<User>, @InjectModel(UserSetting.name) private userSettinModel : Model<UserSetting>){}


    async createUser( {settings, ...createUserDto}: createUserDto ){
        const existingUser = await this.userModel.findOne({username: createUserDto.username})
        if(existingUser) throw new HttpException('username existing', 400)
        if(settings){
            const newSettings = new this.userSettinModel(settings)
           const savedNewSetting = await newSettings.save();
           const newUSer = new this.userModel({
            ...createUserDto,
            settings: savedNewSetting._id
           })

           return newUSer.save()
        }
        const newUser = new this.userModel(createUserDto)
        return newUser.save()
    }

    getUser(){
        return this.userModel.find().populate(['settings', 'posts']);
    }

    getUserById(id:string){
        // recupérer un user avec les infos détailler sur le settings 
        return this.userModel.findById(id).populate(['settings', 'posts'])
    }

    updateUSer(id: string, updateDato: UpdateDto){
        return this.userModel.findByIdAndUpdate(id,  updateDato, {new: true})
    }

    deleteUser(id: string) 
    {
        return this.userModel.findByIdAndDelete(id)
    }

}
