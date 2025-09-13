import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Projeto } from "src/Projetos/projeto.model";
import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criaProjeto.DTO";
import { ListarProjeto } from "./dto/listarProjeto.DTO";


@Controller("/projetos")
export class ProjetoController {
    
    // injetando dependecia do service
    constructor(private readonly projetoService: ProjetoService,){}

    @Post("/cadastrar")
    //metodo captura o corpo da requisição, amazena em uma variavel e verifica se os dados batem com o model
    async inserir(@Body() dto: CriarProjetoDTO): Promise<Projeto> {
        //uso o service e chamo o metodo inserir, inserir recebe o corpo da requisição
        return this.projetoService.inserirProjeto(dto);
    }

    @Get("/listar")
    async listarTodos(): Promise<Projeto[]>{
        return this.projetoService.listarTodosProjetos();
    }

    @Get(":id")
    listarId(@Param("id") projetoId:string): Promise<Projeto>{
        return this.projetoService.listarPorId(projetoId);
    }
    
    @Patch(":id")
    alterar(@Param("id") projetoId:string, @Body() alterarProjetoDTO: atualizarProjetoDTO,): Promise<Projeto>{
        return this.projetoService.alterar(projetoId, alterarProjetoDTO);
    }
    
    @Delete(":id")
    deletar(@Param("id")Id:string){
       return this.projetoService.deletarProjeto(Id);
    }
    
}