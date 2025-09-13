import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Projeto } from "src/Projetos/projeto.model";
import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criaProjeto.DTO";


@Controller("/projetos")
export class ProjetoController {
    
    // injetando dependecia do service
    constructor(private readonly projetoService: ProjetoService,){}

    @Post("/cadastrar")
    //metodo captura o corpo da requisição, amazena em uma variavel e verifica se os dados batem com o model
    async inserirProjeto(@Body() novoProjeto: CriarProjetoDTO): Promise<Projeto> {
        //uso o service e chamo o metodo inserir, inserir recebe o corpo da requisição
        return this.projetoService.inserir(novoProjeto);
    }

    @Get("/listar")
    async listarTodosProjetos(): Promise<Projeto[]>{
        return this.projetoService.listarTodosProjetos();
    }

    @Post("/listar-id")
    listarId(projetoId:string): Promise<Projeto>{
        return this.projetoService.listarPorId(projetoId);
    }
    
    @Patch(":Id")
    alterar(@Param("Id") projetoId:string, @Body() alterarProjetoDTO: atualizarProjetoDTO,): Promise<Projeto>{
        return this.projetoService.alterar(projetoId, alterarProjetoDTO);
    }
    
    @Post("/deletar")
    async deletar(projetoId:string): Promise<void>{
        await this.projetoService.deletarProjeto(projetoId);
    }
    
}