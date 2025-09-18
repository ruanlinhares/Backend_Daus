import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
import { atualizarProjetoDTO } from "./projetoSchemas/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./projetoSchemas/criarProjeto.DTO";
export declare class ProjetoService {
    private readonly projetoRepository;
    constructor(projetoRepository: Repository<Projeto>);
    inserirProjeto(dto: CriarProjetoDTO): Promise<Projeto>;
    listarTodosProjetos(): Promise<Projeto[]>;
    listarPorId(projetoId: string): Promise<Projeto>;
    atualizarProjeto(projetoId: string, dto: atualizarProjetoDTO): Promise<Projeto>;
    deletarProjeto(projetoId: string): Promise<string>;
}
