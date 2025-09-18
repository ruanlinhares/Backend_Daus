import { Injectable } from "@nestjs/common";
import { UsuarioService } from "src/Usuarios/usuario.service";
import { CadastroDTO } from "./authSchemas/cadastro.DTO";

@Injectable()
export class AuthService{

    constructor(
        private readonly usuarioService: UsuarioService, 
    ){}

    validarCadastro( dto: CadastroDTO){}

    validarLogin(){}
}