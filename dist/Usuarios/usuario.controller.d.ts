import { UsuarioService } from "./usuario.service";
import { CriarUsuarioDTO } from "./usuarioSchemas/criarUsuario.DTO";
import { ListarUsuarioDTO } from "./usuarioSchemas/listarUsuario.DTO";
import { AtualizarUsuarioDTO } from "./usuarioSchemas/atualizarUsuario.DTO";
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    inserir(dto: CriarUsuarioDTO): Promise<ListarUsuarioDTO>;
    listar(): Promise<ListarUsuarioDTO[]>;
    listaId(usuarioId: string): Promise<ListarUsuarioDTO>;
    atualizar(usuarioId: string, dto: AtualizarUsuarioDTO): Promise<ListarUsuarioDTO>;
    deletar(usuarioId: string): Promise<string>;
}
