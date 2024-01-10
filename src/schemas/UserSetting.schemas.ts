import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSetting {
    @Prop({required: false})
    receiveNotification?: boolean;

    @Prop({required: false})
    receiveMail?: false

    @Prop({required: false})
    receiveSMS?: boolean

}

export const UserSettingSchme = SchemaFactory.createForClass(UserSetting)