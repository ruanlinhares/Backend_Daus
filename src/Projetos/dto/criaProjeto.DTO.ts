import { IsNumber, IsString } from "class-validator";

export class CriarProjetoDTO{

    @IsString()
    Id:string;

    @IsString()
    nomeProjeto:string;

    @IsString()
    descricaoProjeto:string;

    @IsString()
    autorProjeto:string;

    @IsNumber()
    valorProjeto:number;

    @IsString()
    statusPRojeto:string;
}