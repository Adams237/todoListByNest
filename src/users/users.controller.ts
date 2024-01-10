import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/createUserDto';
import mongoose from 'mongoose';
import { UpdateDto } from './dto/UpdateDto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() createUserdeto: createUserDto) {
        console.log(createUserdeto);
        return this.usersService.createUser(createUserdeto)
    }

    @Get()
    getUsers() {
        return this.usersService.getUser()
    }

    @Get(':id')
    async getUSerById(@Param('id') id: string) {
        console.log(id);

        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('user not found', 404)
        const findUser = await this.usersService.getUserById(id)
        if (!findUser) throw new HttpException('user not founf', 404)
        return findUser
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updateDto: UpdateDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('invalid id', 400)
        const updateUser = await this.usersService.updateUSer(id, updateDto)
        if(!updateUser) throw new HttpException('user not found', 404)
    }

    @Delete(':id')
    async deletUser(@Param('id') id:string)
    {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('invalid id', 400)
        const deleteUser = await this.usersService.deleteUser(id)
        if(!deleteUser) throw new HttpException('user not found', 404)
        if(!deleteUser) throw new HttpException('user not found', 404)
        return deleteUser
    }
}
