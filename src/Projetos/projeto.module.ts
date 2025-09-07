import { Module } from "@nestjs/common";
import { ProjetoController } from "src/Projetos/projeto.controller";
import { ProjetoService } from "src/Projetos/projeto.service";
@Module({
    imports:[],
    controllers:[ProjetoController],
    providers:[ProjetoService],
})

export class ProjetoModule{}