import { HttpException, HttpStatus, Injectable, ForbiddenException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "src/Usuarios/usuario.model";
import { Projeto } from "src/Projetos/projeto.model";
import { AlterarNivelDeAcesso, NivelAcesso } from "./adminActions/alterarNivelDeAcesso.DTO";
import { AprovarProjeto } from "./adminActions/aprovarProjeto.DTO";

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>,
    ){}

    async AlterarNivelDeAcesso(
        usuarioIdAlvo : string,
        dto: AlterarNivelDeAcesso,
        usuarioRequisitante: { sub: string; role: string}
    ): Promise<Usuario> {
        if (usuarioRequisitante.role !== 'superadmin'){
            throw new ForbiddenException('apenas superadmin pode alterar niveis de acesso');
        }
        
        const usuarioAlvo = await this.usuarioRepository.findOne({ where: {id: usuarioIdAlvo}});

        if(!usuarioAlvo) {
            throw new NotFoundException('usuario nao encotrado')
        }
        if(dto.nivelAcesso === NivelAcesso.SUPERADMIN) {
            throw new ForbiddenException('superadmin nao pode dar superadmin a outro usuario')
        }
        if(usuarioAlvo.roleUsuario === 'superadmin') {
            throw new ForbiddenException('nao é possivel remover o cargo de superadmin de outro superadmin')
        }
        if(usuarioRequisitante.sub === usuarioIdAlvo) {
            throw new ForbiddenException('voce nao pode alterar seu proprio nivel de acesso')
        }

        usuarioAlvo.roleUsuario = dto.nivelAcesso;
        return await this.usuarioRepository.save(usuarioAlvo);
    }

    async aprovarOuNegarProjeto (
        projetoId: string,
        dto: AprovarProjeto,
        usuarioRequisitante: {sub: string; role: string}
    ): Promise<Projeto> {

        if(usuarioRequisitante.role !== 'admin' && usuarioRequisitante.role !== 'superadmin'){
            throw new ForbiddenException('apenas admin ou superadmin podem aprovar ou negar projetos')
        }

        const projeto = await this.projetoRepository.findOne({ where: { id: projetoId}})
        if(!projeto) {
            throw new NotFoundException('Projeto nao encontrado');
        }

        projeto.statusProjeto = dto.status;
        return await this.projetoRepository.save(projeto);
    }   

}

    

    