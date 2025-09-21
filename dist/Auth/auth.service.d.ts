import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/Usuarios/usuario.service";
import { CriarUsuarioDTO } from "src/Usuarios/usuarioSchemas/criarUsuario.DTO";
import { LoginDTO } from "./authSchemas/login.DTO";
import { Usuario } from "src/Usuarios/usuario.model";
import { ListarUsuarioDTO } from "src/Usuarios/usuarioSchemas/listarUsuario.DTO";
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    cadastro(dto: CriarUsuarioDTO): Promise<Usuario>;
    validarUsuario(dto: LoginDTO): Promise<Usuario>;
    login(dto: ListarUsuarioDTO): Promise<{
        access_token: string;
    }>;
}
