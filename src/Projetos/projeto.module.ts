import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjetoController } from "src/Projetos/projeto.controller";
import { ProjetoService } from "src/Projetos/projeto.service";
import { Projeto } from "./projeto.model";

@Module({
    imports:[TypeOrmModule.forFeature([Projeto])],
    controllers:[ProjetoController],
    providers:[ProjetoService],
})

export class ProjetoModule{}