import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateUserSettingDto {
    @IsOptional()
    @IsBoolean()
    receiveNotification?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveMail?: false

    @IsOptional()
    @IsBoolean()
    receiveSMS?: boolean
}

export class createUserDto{
    @IsNotEmpty()
    @IsString()
    username: string

    @IsString()
    displayName?: string

    @IsOptional()
    @ValidateNested()
    settings?: CreateUserSettingDto
}