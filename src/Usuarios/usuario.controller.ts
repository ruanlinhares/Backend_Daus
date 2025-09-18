import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CriarUsuarioDTO } from "./usuarioSchemas/criarUsuario.DTO";
import { plainToInstance } from "class-transformer";
import { ListarUsuarioDTO } from "./usuarioSchemas/listarUsuario.DTO";
import { AtualizarUsuarioDTO } from "./usuarioSchemas/atualizarUsuario.DTO";

@Controller("/usuarios")
export class UsuarioController{
    
    constructor(private readonly usuarioService:UsuarioService,){}

    @Post("/inserir")
    async inserir(@Body() dto:CriarUsuarioDTO): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.inserirUsuario(dto);
        return plainToInstance(ListarUsuarioDTO,dto);
    }

    @Get("/listar")
    async listar(): Promise<ListarUsuarioDTO[]>{
        const projeto = await this.usuarioService.listarTodosUsuarios();
        return plainToInstance(ListarUsuarioDTO, projeto);
    }

    @Get(":id")
    async listaId(@Param("id") usuarioId:string): Promise<ListarUsuarioDTO>{
        const projeto = await this.usuarioService.listarUsuarioId(usuarioId);

        return plainToInstance(ListarUsuarioDTO, projeto);
    }
    
    @Patch(":id")
    async atualizar(@Param("id") usuarioId:string, @Body() dto:AtualizarUsuarioDTO): Promise<ListarUsuarioDTO>{

        const usuarioAtualizado = await this.usuarioService.atualizarUsuario(usuarioId,dto);

        return plainToInstance(ListarUsuarioDTO, usuarioAtualizado);
    }
    
    
    @Delete(":id")
    async deletar(@Param("id") usuarioId:string) : Promise<string>{
        return await this.usuarioService.deletarUsuario(usuarioId);
    }
}