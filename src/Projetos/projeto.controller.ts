import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Projeto } from "src/Projetos/projeto.model";
import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";


@Controller("/projetos")
export class ProjetoController {
    
    // injetando dependecia do service
    constructor(private readonly projetoService: ProjetoService,){}

    @Post("/cadastrar")
    //metodo captura o corpo da requisição, amazena em uma variavel e verifica se os dados batem com o model
    async inserirProjeto(@Body() novoProjeto: {nome:string; descricao:string; criador:string}): Promise<Projeto> {
        //uso o service e chamo o metodo inserir, inserir recebe o corpo da requisição
        return this.projetoService.inserir(novoProjeto);
    }

    @Get("/listar")
    async listarProjetos(): Promise<Projeto[]>{
        return this.projetoService.listarTodosProjetos();
    }

    listarProjetoId(){}
    
    @Patch(":Id")
    alterarProjeto(@Param("Id") projetoId:string, @Body() alterarProjetoDTO: atualizarProjetoDTO,): Promise<Projeto>{
        return this.projetoService.alterar(projetoId, alterarProjetoDTO);
    }
    
    @Post("/deletar")
    deletarProjeto(){}
    
}