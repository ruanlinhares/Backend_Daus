import { Usuario } from "./usuario.model";
import { Repository } from "typeorm";
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    inserirUsuario(): void;
    listarTodosUsuarios(): void;
}
