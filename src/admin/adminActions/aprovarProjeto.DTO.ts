import {IsEnum, IsNotEmpty} from 'class-validator';

export enum StatusProjeto {
    APROVADO = 'aprovado',
    REPROVADO = 'reprovado',
    EM_ANALISE = 'em_analise'
}

export class AprovarProjeto {
    @IsNotEmpty()
    @IsEnum(StatusProjeto, {message: 'Status deve ser: aprovado, reprovado ou em_analise'})
    status: StatusProjeto;
}