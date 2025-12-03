import { Controller, UseGuards, Put, Post, Body, Param, Request } from "@nestjs/common";
import { Roles } from "src/Auth/authDecorators/roles.decorator";
import { JwtAuhtGuard } from "src/Auth/authGuards/jwt-auth.guard";
import { RolesGuard } from "src/Auth/authGuards/roles.guard";
import { AdminService } from "./admin.service";
import { AlterarNivelDeAcesso, NivelAcesso } from "./adminActions/alterarNivelDeAcesso.DTO";
import { AprovarProjeto } from "./adminActions/aprovarProjeto.DTO";

@UseGuards(JwtAuhtGuard, RolesGuard)
@Controller('/admin')
export class adminController{
    
    constructor (private readonly adminService: AdminService){}
    
    @Roles('admin', 'superadmin')
    @Put('projeto/:id/status')
    async aprovarOuNegarProjeto(
        @Param('id') projetoId: string,
        @Body() dto: AprovarProjeto,
        @Request() req: any
    ){
        return await this.adminService.updateStatusProject(projetoId, dto, req.user);
    }

    @Roles('superadmin')
    @Put('/usuario/:id/nivel-acesso')
    async alterarNivelAcesso(
        @Param('id') usuarioId: string,
        @Body() dto: AlterarNivelDeAcesso,
        @Request() req: any
    ){
        return await this.adminService.AlterarNivelDeAcesso(usuarioId, dto, req.user);
    }
}