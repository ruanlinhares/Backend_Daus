import { AuthService } from "./auth.service";
import { CriarUsuarioDTO } from "src/Usuarios/usuarioSchemas/criarUsuario.DTO";
import { LoginDTO } from "./authSchemas/login.DTO";
import { ListarUsuarioDTO } from "src/Usuarios/usuarioSchemas/listarUsuario.DTO";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    cadastro(dto: CriarUsuarioDTO): Promise<ListarUsuarioDTO>;
    login(dto: LoginDTO): Promise<{
        access_token: string;
    }>;
}
