import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";

@Injectable()
export class ProjetoService{
    
    constructor(
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>,
    ){}

    inserir(novoProjeto) : Promise<Projeto>{
        return this.projetoRepository.save(novoProjeto)
    }

    listarTodosProjetos(){
        return this.projetoRepository.find();
    }

    listarPorId(projetoId:string): Promise<Projeto>{
        return this.projetoRepository.findOne({where: {id: projetoId}});
    }

    async alterar(projetoId:string, atualizarProjeto:atualizarProjetoDTO ): Promise<Projeto>{
        
        const dadosProjeto = this.projetoRepository.findOne({ where: {id:projetoId}});

        if(!dadosProjeto){
            throw new NotFoundException("Projeto não encontrado");   
        }

        //continuar lógica
        //pegar novos dados
        //inserir os dados no id requisitado
        
    }

    async deletarProjeto(projetoId:string): Promise<void>{
        await this.projetoRepository.delete(projetoId);
        //melhorar
    }
}


