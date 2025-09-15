import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criarProjeto.DTO";
export declare class ProjetoService {
    private readonly projetoRepository;
    constructor(projetoRepository: Repository<Projeto>);
    inserirProjeto(dto: CriarProjetoDTO): Promise<Projeto>;
    listarTodosProjetos(): Promise<Projeto[]>;
    listarPorId(projetoId: string): Promise<Projeto>;
    atualizarProjeto(projetoId: string, dto: atualizarProjetoDTO): Promise<Projeto>;
    deletarProjeto(projetoId: string): Promise<string>;
}
