import { Exclude, Expose } from "class-transformer";

@Exclude()//remove todos os campos que não são expose
export class ListarProjetoDTO{
    @Expose()
    id:string;
    @Expose()
    nomeProjeto:string;
    @Expose()
    descricaoProjeto:string;
    @Expose()
    valorProjeto:string;
    @Expose()
    autorProjeto:string;
}