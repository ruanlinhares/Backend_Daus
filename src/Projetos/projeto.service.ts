import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criarProjeto.DTO";

@Injectable()
export class ProjetoService{
    
    constructor(
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>,
    ){}

    async inserirProjeto(dto:CriarProjetoDTO) : Promise<Projeto>{
        
        const projeto = this.projetoRepository.create(dto);
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


