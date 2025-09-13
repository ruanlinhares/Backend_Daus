import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { ListarProjeto } from "./dto/listarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criaProjeto.DTO";

@Injectable()
export class ProjetoService{
    
    constructor(
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>,
    ){}

    async inserirProjeto(dto:CriarProjetoDTO) : Promise<Projeto>{
        return await this.projetoRepository.save(dto)
    }

    listarTodosProjetos() : Promise<Projeto[]>{
        return this.projetoRepository.find();
    }

    async listarPorId(projetoId:string): Promise<Projeto>{
        const projetoListado = await this.projetoRepository.findOne({where: {id: projetoId}});
        
        if(!projetoListado){
            throw new NotFoundException("Projeto não encontrado");
        }

        return projetoListado;
    }

    async alterar(projetoId:string, atualizarProjeto:atualizarProjetoDTO ): Promise<Projeto>{
        
        const projetoListado = await this.projetoRepository.findOne({ where: {id:projetoId}});

        if(!projetoListado){
            throw new NotFoundException("Projeto não encontrado");   
        }

        return atualizarProjeto; //erro, fazer lógica de atualizar projeto.
        
    }

    async deletarProjeto(projetoId:string): Promise<void>{

        //posso fazer uma verificação

        const projetoDeletado = await this.projetoRepository.delete(projetoId);
    }
}


