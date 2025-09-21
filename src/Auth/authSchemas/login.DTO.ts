import { IsString } from "class-validator";


export class LoginDTO{
    @IsString()
    emailUsuario:string;
    @IsString()
    senhaUsuario:string;
}