import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./projetoSchemas/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./projetoSchemas/criarProjeto.DTO";
import { ListarProjetoDTO } from "./projetoSchemas/listarProjeto.DTO";
export declare class ProjetoController {
    private readonly projetoService;
    constructor(projetoService: ProjetoService);
    inserir(dto: CriarProjetoDTO): ListarProjetoDTO;
    listarTodos(): Promise<ListarProjetoDTO[]>;
    listarId(projetoId: string): Promise<ListarProjetoDTO>;
    atualizar(projetoId: string, dto: atualizarProjetoDTO): Promise<ListarProjetoDTO>;
    deletar(Id: string): Promise<string>;
}
