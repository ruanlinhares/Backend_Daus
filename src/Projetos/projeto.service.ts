import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
import { atualizarProjetoDTO } from "./projetoSchemas/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./projetoSchemas/criarProjeto.DTO";

@Injectable()
export class ProjetoService{
    
    constructor(
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>,
    ){}

    async inserirProjeto(userId:string ,dto:CriarProjetoDTO) : Promise<Projeto>{
        
        const projeto = await this.projetoRepository.create({...dto,  autorProjeto: userId});
        return await this.projetoRepository.save(projeto)
    }

    async listarTodosProjetos() : Promise<Projeto[]>{
        return await this.projetoRepository.find(); 
    }

    async listarPorId(projetoId:string): Promise<Projeto>{
        const projeto = await this.projetoRepository.findOne({where: {id: projetoId}});
        
        if(!projeto){
            throw new NotFoundException("Projeto não encontrado");
        }

        return projeto;
    }

    async atualizarProjeto(projetoId:string, dto:atualizarProjetoDTO ): Promise<Projeto>{
        
        const projeto = await this.projetoRepository.findOne({ where: {id:projetoId}});
        
        if(!projeto){
            throw new NotFoundException("Projeto não encontrado");   
        }

        Object.assign(projeto, dto);
        
        return await this.projetoRepository.save(projeto);
        
    }

    async deletarProjeto(projetoId:string): Promise<string>{
        const projetoDeletado = await this.projetoRepository.delete(projetoId);

        return "Projeto deletado";
    }
}


