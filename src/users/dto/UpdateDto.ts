import { IsOptional, IsString } from "class-validator";

export class UpdateDto {

    @IsOptional()
    @IsString()
    displayName?: string;

    @IsOptional()
    @IsString()
    avatarUrl: string
}