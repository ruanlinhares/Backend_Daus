import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./usuario.model";
import { AuthModule } from "src/Auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario]), AuthModule],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})

export class UsuarioModule{
}