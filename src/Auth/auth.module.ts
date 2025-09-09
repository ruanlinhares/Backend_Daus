import { Module } from "@nestjs/common";
import { ProjetoModule } from "src/Projetos/projeto.module";
import { UsuarioModule } from "src/Usuarios/usuario.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";


@Module({
    imports:[UsuarioModule, ProjetoModule],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule{}