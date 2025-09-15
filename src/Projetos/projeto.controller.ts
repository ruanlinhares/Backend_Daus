import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./dto/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./dto/criarProjeto.DTO";
import { plainToInstance } from "class-transformer";
import { ListarProjetoDTO } from "./dto/listarProjeto.DTO";

@Controller("/projetos")
export class ProjetoController {
    
    // injetando dependecia do service
    constructor(private readonly projetoService: ProjetoService,){}

    @Post("/cadastrar")
    //metodo captura o corpo da requisição, amazena em um DTO
    inserir(@Body() dto: CriarProjetoDTO){
        //uso o service e chamo o metodo inserir, inserir recebe o corpo da requisição
        const projeto = this.projetoService.inserirProjeto(dto);
        //retorno do banco somente os campos necessarios presentes do Dto
        return plainToInstance(ListarProjetoDTO,projeto);
    }

    @Get("/listar")
    async listarTodos(): Promise<ListarProjetoDTO[]>{
        const projetos = await this.projetoService.listarTodosProjetos();
        return plainToInstance(ListarProjetoDTO, projetos);
    }   

    @Get(":id")
    async listarId(@Param("id") projetoId:string): Promise<ListarProjetoDTO>{
        const projeto =  await this.projetoService.listarPorId(projetoId);
        return plainToInstance(ListarProjetoDTO, projeto)
    }
    
    @Patch(":id")
    async atualizar(@Param("id") projetoId:string, @Body() dto: atualizarProjetoDTO,): Promise<ListarProjetoDTO>{
        const projeto = await this.projetoService.atualizarProjeto(projetoId, dto);
        return plainToInstance(ListarProjetoDTO, projeto);
    }
    
    @Delete(":id")
    async deletar(@Param("id")Id:string) : Promise<string>{
       return await this.projetoService.deletarProjeto(Id);
    }
    
}