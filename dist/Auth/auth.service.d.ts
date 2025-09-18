import { UsuarioService } from "src/Usuarios/usuario.service";
import { CadastroDTO } from "./authSchemas/cadastro.DTO";
export declare class AuthService {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    validarCadastro(dto: CadastroDTO): void;
    validarLogin(): void;
}
