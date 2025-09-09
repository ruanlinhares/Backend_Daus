import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./usuario.model";
import { Repository } from "typeorm";


@Injectable()
export class UsuarioService{
    
    constructor(
        //injeta um repositóriuo no model usuario
        @InjectRepository(Usuario)
        // cria uma variavel do tipo repositorio do model usuario
        private readonly usuarioRepository : Repository<Usuario>
    ){}


    inserirUsuario(){}
    listarTodosUsuarios(){}
}