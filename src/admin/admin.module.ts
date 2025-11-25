import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Usuario } from '../Usuarios/usuario.model';
import { Projeto } from '../Projetos/projeto.model';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario, Projeto])],
    controllers: [adminController],
    providers: [AdminService],
})
export class AdminModule {}