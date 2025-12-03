import { IsNumber, IsString } from "class-validator";

export class CriarProjetoDTO{

    @IsString()
    nomeProjeto:string;

    @IsString()
    descricaoProjeto:string;
    
    @IsNumber()
    valorProjeto:number;

    @IsString()
    autorProjeto:string;

}