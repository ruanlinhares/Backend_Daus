import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CriarUsuarioDTO } from "src/Usuarios/usuarioSchemas/criarUsuario.DTO";
import { LoginDTO } from "./authSchemas/login.DTO";
import { plainToInstance } from "class-transformer";
import { ListarUsuarioDTO } from "src/Usuarios/usuarioSchemas/listarUsuario.DTO";


@Controller("/auth")
export class AuthController{

    constructor( private readonly authService : AuthService){}

    @Post("/cadastro")
    async cadastro(@Body() dto: CriarUsuarioDTO) : Promise<ListarUsuarioDTO>{
        const usuario = await this.authService.cadastro(dto);
        return plainToInstance(ListarUsuarioDTO, usuario);
    }

    @Post("/login")
    async login(@Body() dto: LoginDTO) {
        const usuario = await this.authService.validarUsuario(dto)
        
        const usuarioRefactor = plainToInstance(ListarUsuarioDTO, usuario)
        
        return this.authService.login(usuarioRefactor);
    }

}