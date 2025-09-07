import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
export declare class ProjetoService {
    private readonly projetoRepository;
    constructor(projetoRepository: Repository<Projeto>);
    inserir(novoProjeto: any): Promise<Projeto>;
    buscar(): void;
    alterar(): void;
    deletar(): void;
}
