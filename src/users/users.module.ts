import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/schemas/User.schemas';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSetting, UserSettingSchme } from 'src/schemas/UserSetting.schemas';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name: User.name,
            schema : userSchema
        },
        {
            name: UserSetting.name,
            schema: UserSettingSchme
        }
    ])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
