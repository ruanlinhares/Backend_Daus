import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CriarUsuarioDTO } from "./usuarioSchemas/criarUsuario.DTO";
import { plainToInstance } from "class-transformer";
import { ListarUsuarioDTO } from "./usuarioSchemas/listarUsuario.DTO";
import { AtualizarUsuarioDTO } from "./usuarioSchemas/atualizarUsuario.DTO";
import { JwtAuhtGuard } from "src/Auth/authGuards/jwt-auth.guard";
import { RolesGuard } from "src/Auth/authGuards/roles.guard";
import { Roles } from "src/Auth/authDecorators/roles.decorator";

@UseGuards(JwtAuhtGuard, RolesGuard) // fazer a logica das roles classificar as requisições
@Controller("/usuarios")
export class UsuarioController{
    
    constructor(private readonly usuarioService:UsuarioService,){}

    @Post("/inserir")
    @Roles('admin', 'user')
    async inserir(@Body() dto:CriarUsuarioDTO): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.inserirUsuario(dto);
        return plainToInstance(ListarUsuarioDTO,dto);
    }

    @Get("/listar")
    @Roles('admin', 'user')
    async listar(): Promise<ListarUsuarioDTO[]>{
        const projeto = await this.usuarioService.listarTodosUsuarios();
        return plainToInstance(ListarUsuarioDTO, projeto);
    }

    @Get(":id")
    @Roles('admin', 'user')
    async listaId(@Param("id") usuarioId:string): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.listarUsuarioId(usuarioId);

        return plainToInstance(ListarUsuarioDTO, projeto);
    }
    
    @Patch(":id")
    @Roles('admin', 'user')
    async atualizar(@Param("id") usuarioId:string, @Body() dto:AtualizarUsuarioDTO): Promise<ListarUsuarioDTO>{

        const usuarioAtualizado = await this.usuarioService.atualizarUsuario(usuarioId,dto);

        return plainToInstance(ListarUsuarioDTO, usuarioAtualizado);
    }
    
    
    @Delete(":id")
    @Roles('admin', 'user')
    async deletar(@Param("id") usuarioId:string) : Promise<string>{
        return await this.usuarioService.deletarUsuario(usuarioId);
    }
}