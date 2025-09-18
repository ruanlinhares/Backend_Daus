import { Usuario } from "./usuario.model";
import { Repository } from "typeorm";
import { CriarUsuarioDTO } from "./usuarioSchemas/criarUsuario.DTO";
import { AtualizarUsuarioDTO } from "./usuarioSchemas/atualizarUsuario.DTO";
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    inserirUsuario(dto: CriarUsuarioDTO): Promise<Usuario>;
    listarTodosUsuarios(): Promise<Usuario[]>;
    listarUsuarioId(usuarioId: string): Promise<Usuario>;
    atualizarUsuario(usuarioId: string, dto: AtualizarUsuarioDTO): Promise<Usuario>;
    deletarUsuario(usuarioId: string): Promise<string>;
}
