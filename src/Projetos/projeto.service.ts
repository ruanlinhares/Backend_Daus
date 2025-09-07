import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "src/Projetos/projeto.model";
import { Repository } from "typeorm";

@Injectable()
export class ProjetoService{
    
    constructor(
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>
    ){}

    inserir(novoProjeto) : Promise<Projeto>{
        //corpo da requisição recebido do controller
        // uso meu repository para gravar os dados recebidos no banco
        return this.projetoRepository.save(novoProjeto)
    }
    buscar(){}
    alterar(){}
    deletar(){}
}


