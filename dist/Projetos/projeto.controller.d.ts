import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criarProjeto.DTO";
import { ListarProjetoDTO } from "./dto/listarProjeto.DTO";
export declare class ProjetoController {
    private readonly projetoService;
    constructor(projetoService: ProjetoService);
    inserir(dto: CriarProjetoDTO): ListarProjetoDTO;
    listarTodos(): Promise<ListarProjetoDTO[]>;
    listarId(projetoId: string): Promise<ListarProjetoDTO>;
    atualizar(projetoId: string, dto: atualizarProjetoDTO): Promise<ListarProjetoDTO>;
    deletar(Id: string): Promise<string>;
}
