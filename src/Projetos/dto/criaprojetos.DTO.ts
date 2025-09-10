import { IsString } from "class-validator";

export class CriarProjetosDTO{

    @IsString()
    Id:string;

    @IsString()
    nomeProjeto:string;

    @IsString()
    descricaoProjeto:string;

    @IsString()
    autorProjeto:string;

    @IsString()
    statusPRojeto:string;
}