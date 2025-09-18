import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CadastroDTO } from "./authSchemas/cadastro.DTO";

@Controller("/auth")
export class AuthController{

    constructor( private readonly authService : AuthService){}

    @Post("/cadastro")
    async cadastro(@Body() dto: CadastroDTO) : Promise<void>{
        await this.authService.validarCadastro(dto);
    }

    @Post("/login")
    login(){}

}