import { IsString } from "class-validator";

export class CriarUsuarioDTO{
    
    @IsString()
    id:string;
    @IsString()
    nomeUsuario:string;
    @IsString()
    emailUsuario:string;
    @IsString()
    senhaUsuario:string;
    @IsString()
    roleUsuario:string;

}