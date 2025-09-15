import { Exclude, Expose } from "class-transformer";

@Exclude()//remove todos os campos que não tem expose
export class ListarProjetoDTO{
    @Expose()
    nomeProjeto:string;
    @Expose()
    descricaoProjeto:string;
    @Expose()
    valorProjeto:string;
    @Expose()
    autorProjeto:string;
}