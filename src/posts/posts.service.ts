import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/Post.Schema';
import { CreatePostDto } from './dto/CreatePost.dto';
import { User } from 'src/schemas/User.schemas';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>
    ) { }

    async createPost({ userId, ...createPost }: CreatePostDto) {
        const findUser = await this.userModel.findById(userId)
        if(!findUser) throw new HttpException('user not found', 404)
        const newPost = new this.postModel(createPost)
        const savePost = await newPost.save()
        await findUser.updateOne({$push:{
            posts: savePost._id
        }})
        return savePost
    }

    findPostById() { }
}
