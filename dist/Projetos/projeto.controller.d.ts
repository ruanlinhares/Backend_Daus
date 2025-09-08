import { Projeto } from "src/Projetos/projeto.model";
import { ProjetoService } from "src/Projetos/projeto.service";
export declare class ProjetoController {
    private readonly projetoService;
    constructor(projetoService: ProjetoService);
    inserirProjeto(novoProjeto: {
        nome: string;
        descricao: string;
        criador: string;
    }): Promise<Projeto>;
    listarProjetos(): Promise<Projeto[]>;
}
