import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CriarUsuarioDTO } from "./usuarioSchemas/criarUsuario.DTO";
import { plainToInstance } from "class-transformer";
import { ListarUsuarioDTO } from "./usuarioSchemas/listarUsuario.DTO";
import { AtualizarUsuarioDTO } from "./usuarioSchemas/atualizarUsuario.DTO";
import { JwtAuhtGuard } from "src/Auth/authGuards/jwt-auth.guard";
import { RolesGuard } from "src/Auth/authGuards/roles.guard";
import { Roles } from "src/Auth/authDecorators/roles.decorator";
import { Projeto } from "src/Projetos/projeto.model";
import { ListarProjetoDTO } from "src/Projetos/projetoSchemas/listarProjeto.DTO";
import { ProjetoService } from "src/Projetos/projeto.service";


@UseGuards(JwtAuhtGuard, RolesGuard) 
@Controller("/usuarios")
export class UsuarioController{
    
    constructor(private readonly usuarioService:UsuarioService,
        private readonly projetoService:ProjetoService
    ){}

    @Post("/inserir")
    @Roles('admin')
    async inserir(@Body() dto:CriarUsuarioDTO): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.inserirUsuario(dto);
        return plainToInstance(ListarUsuarioDTO,projeto);
    }

    @Get("/listar")
    @Roles('admin', 'criador', 'investidor')
    async listar(): Promise<ListarUsuarioDTO[]>{
        const projeto = await this.usuarioService.listarTodosUsuarios();
        return plainToInstance(ListarUsuarioDTO, projeto);
    }

    @Get(":id")
    @Roles('admin')
    async listaId(@Param("id") usuarioId:string): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.listarUsuarioId(usuarioId);

        return plainToInstance(ListarUsuarioDTO, projeto);
    }
    
    @Patch(":id")
    @Roles('admin')
    async atualizar(@Param("id") usuarioId:string, @Body() dto:AtualizarUsuarioDTO): Promise<ListarUsuarioDTO>{

        const usuarioAtualizado = await this.usuarioService.atualizarUsuario(usuarioId,dto);

        return plainToInstance(ListarUsuarioDTO, usuarioAtualizado);
    }
    
    
    @Delete(":id")
    @Roles('admin')
    async deletar(@Param("id") usuarioId:string) : Promise<string>{
        return await this.usuarioService.deletarUsuario(usuarioId);
    }

    @Get("listarProjetos/:id")
    @Roles('admin', 'criador')
    async ProjetosUsuario(@Param("id") usuarioName:string): Promise<ListarProjetoDTO[]>{
        
        const projetosUsuario = await this.projetoService.listarPorAutor(usuarioName);
        
        return plainToInstance(ListarProjetoDTO, projetosUsuario);
    }

    @Get("/listarPorNome/:id")
    @Roles('admin', 'criador', 'investidor')
    async listaPorNome(@Param("id") usuarioName:string): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.listarUsuarioNome(usuarioName);

        return plainToInstance(ListarUsuarioDTO, projeto);
    }
}