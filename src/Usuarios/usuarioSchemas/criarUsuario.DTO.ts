import { IsString } from "class-validator";

export class CriarUsuarioDTO{
    
    @IsString()
    nomeUsuario:string;
    @IsString()
    emailUsuario:string;
    @IsString()
    senhaUsuario:string;
    @IsString()
    roleUsuario:string;

}