import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSetting } from "./UserSetting.schemas";
import { Post } from "./Post.Schema";

@Schema()
export class User {
    @Prop({ unique: true, required:true })
    username: string;

    @Prop({ required: false })
    displayName?: string

    @Prop({required: false})
    avatarUrl?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSetting' })
    settings?: UserSetting

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref : 'Post'}]})
    posts?: Post[]
}

 export const userSchema =  SchemaFactory.createForClass(User)