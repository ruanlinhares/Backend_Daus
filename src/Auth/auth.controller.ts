import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CriarUsuarioDTO } from "src/Usuarios/usuarioSchemas/criarUsuario.DTO";
import { LoginDTO } from "./authSchemas/login.DTO";
import { plainToInstance } from "class-transformer";
import { ListarUsuarioDTO } from "src/Usuarios/usuarioSchemas/listarUsuario.DTO";
import { JwtPayload } from "./authSchemas/jwtPayload.DTO";


@Controller("/auth")
export class AuthController{

    constructor( private readonly authService : AuthService){}

    @Post("/register")
    async cadastro(@Body() dto: CriarUsuarioDTO) : Promise<ListarUsuarioDTO>{
        const usuario = await this.authService.cadastro(dto);
        return plainToInstance(ListarUsuarioDTO, usuario);
    }

    @Post("/login") //mudar o retorno para receber token e dados do usuario.
    async login(@Body() dto: LoginDTO) {
        const usuario = await this.authService.validarUsuario(dto);
        
        const usuarioRefactor = await plainToInstance(ListarUsuarioDTO, usuario);
        
        const access_token = await this.authService.generateToken(usuarioRefactor)
        
        return {...usuarioRefactor, access_token};
    }

}