import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto{
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    age:number;
    @IsString()
    password:string;
}