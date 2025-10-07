import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/Usuarios/usuario.service";
import { CriarUsuarioDTO } from "src/Usuarios/usuarioSchemas/criarUsuario.DTO";
import { LoginDTO } from "./authSchemas/login.DTO";
import { Usuario } from "src/Usuarios/usuario.model";
import { ListarUsuarioDTO } from "src/Usuarios/usuarioSchemas/listarUsuario.DTO";
import * as bcrypt from 'bcrypt';
import { JwtPayload } from "./authSchemas/jwtPayload.DTO";

@Injectable()
export class AuthService{

    constructor(
        private readonly usuarioService: UsuarioService, 
        private readonly jwtService: JwtService, 
    ){}

    async cadastro( dto: CriarUsuarioDTO): Promise<Usuario>{

        const usuarios = await this.usuarioService.listarTodosUsuarios();
        
        const usuario = usuarios.find((u) => u.emailUsuario === dto.emailUsuario);
        
        if(usuario){
            throw new BadRequestException("Credenciais inválidas");
        }

        return await this.usuarioService.inserirUsuario(dto);
    
        
    }   


    async validarUsuario(dto : LoginDTO) : Promise<Usuario>{
        const usuarios = await this.usuarioService.listarTodosUsuarios()

        const usuario = await usuarios.find((u) => u.emailUsuario === dto.emailUsuario);

        if(!usuario){
            throw new UnauthorizedException("Credenciais inválidas");
        }

        const senhaValida = await bcrypt.compare(dto.senhaUsuario, usuario.senhaUsuario);

        if(!senhaValida){
            throw new UnauthorizedException("Crednciais inválidas")
        }

        return usuario
    }

    async generateToken(dto: ListarUsuarioDTO){
        const payload = {sub: dto.id, username: dto.nomeUsuario, role: dto.roleUsuario};

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
