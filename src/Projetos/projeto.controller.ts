import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { ProjetoService } from "src/Projetos/projeto.service";
import { atualizarProjetoDTO } from "./projetoSchemas/atualizarProjeto.DTO";
import { CriarProjetoDTO } from "./projetoSchemas/criarProjeto.DTO";
import { plainToInstance } from "class-transformer";
import { ListarProjetoDTO } from "./projetoSchemas/listarProjeto.DTO";
import { JwtAuhtGuard } from "src/Auth/authGuards/jwt-auth.guard";
import { RolesGuard } from "src/Auth/authGuards/roles.guard";
import { Roles } from "src/Auth/authDecorators/roles.decorator";

@UseGuards(JwtAuhtGuard, RolesGuard)
@Controller("/projetos")
export class ProjetoController {
    
    
    constructor(private readonly projetoService: ProjetoService,){}

    @Post("/inserir")
    @Roles('admin', 'criador')
    inserir(@Body() dto: CriarProjetoDTO){
        const projeto = this.projetoService.inserirProjeto(dto);
        return plainToInstance(ListarProjetoDTO,projeto);
    }

    @Get("/listar")
    @Roles('admin', 'criador', 'investidor')
    async listarTodos(): Promise<ListarProjetoDTO[]>{
        const projetos = await this.projetoService.listarTodosProjetos();
        return plainToInstance(ListarProjetoDTO, projetos);
    }   

    @Get("/listar/:id")
    @Roles('admin', 'criador', 'investidor')
    async listarId(@Param("id") projetoId:string): Promise<ListarProjetoDTO>{
        const projeto =  await this.projetoService.listarPorId(projetoId);
        return plainToInstance(ListarProjetoDTO, projeto)
    }
    
    @Patch(":id")
    @Roles('admin', 'criador')
    async atualizar(@Param("id") projetoId:string, @Body() dto: atualizarProjetoDTO,): Promise<ListarProjetoDTO>{
        const projeto = await this.projetoService.atualizarProjeto(projetoId, dto);
        return plainToInstance(ListarProjetoDTO, projeto);
    }
    
    @Delete(":id")
    @Roles('admin', 'criador')
    async deletar(@Param("id")id:string) : Promise<string>{
       
       return await this.projetoService.deletarProjeto(id);
    }

    @Get("/listarEmAnalise")
    @Roles('superadmin','admin')
    async ProjetosEmAnalise(): Promise<ListarProjetoDTO[]>{
        
        const projetosUsuario = await this.projetoService.listarEmAnalise();
        
        return plainToInstance(ListarProjetoDTO, projetosUsuario);
    }

    @Get("/listarAprovados")
    @Roles('superadmin','admin', 'criador', 'investidor')
    async ProjetosAprovados(): Promise<ListarProjetoDTO[]>{
        
        const projetosUsuario = await this.projetoService.listarAprovados();
        
        return plainToInstance(ListarProjetoDTO, projetosUsuario);
    }
    
}