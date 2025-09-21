import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./usuario.model";
import { Repository } from "typeorm";
import { CriarUsuarioDTO } from "./usuarioSchemas/criarUsuario.DTO";
import { AtualizarUsuarioDTO } from "./usuarioSchemas/atualizarUsuario.DTO";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService{
    
    constructor(
        //injeta um repositóriuo no model usuario
        @InjectRepository(Usuario)
        // cria uma variavel do tipo repositorio do model usuario
        private readonly usuarioRepository : Repository<Usuario>
    ){}


    async inserirUsuario(dto: CriarUsuarioDTO): Promise<Usuario>{
        
        const hashSenha = await  bcrypt.hash(dto.senhaUsuario,10);
        
        const usuario = await this.usuarioRepository.create({
            //spraed operator, espalha todas as propriedadesa de um método
            ...dto,
            senhaUsuario: hashSenha,
        });


        return await this.usuarioRepository.save(usuario);
    }

    async listarTodosUsuarios(): Promise<Usuario[]>{
        return await this.usuarioRepository.find();
    }

    async listarUsuarioId(usuarioId:string): Promise<Usuario>{
        const usuario = await this.usuarioRepository.findOne({where:{id:usuarioId}});

        if(!usuario){
            throw new NotFoundException("Usuario não encontrado");
        }

        return await usuario;
    }

    async atualizarUsuario(usuarioId:string, dto:AtualizarUsuarioDTO): Promise<Usuario>{
        
        const usuario = await this.listarUsuarioId(usuarioId);

        Object.assign(usuario, dto);

        return await this.usuarioRepository.save(usuario);
    }


    async deletarUsuario(usuarioId:string) : Promise<string>{

        const usuario = await this.listarUsuarioId(usuarioId);

        await this.usuarioRepository.delete(usuario);
        
        return "Usuário deletado do sistema";
    }
}