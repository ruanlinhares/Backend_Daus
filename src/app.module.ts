import { Module } from '@nestjs/common';
import { ProjetoModule } from './Projetos/projeto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './Projetos/projeto.model';
import { UsuarioModule } from './Usuarios/usuario.module';
import { AuthModule } from './Auth/auth.module';
import { Usuario } from './Usuarios/usuario.model';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ 
      TypeOrmModule.forRoot({
      type: 'mariadb', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'DausDB',
      entities: [Projeto, Usuario],
      synchronize: true, 
    }), 
    
      ConfigModule.forRoot({
        envFilePath: ['.env', '.env.local', '.env.example'],
        isGlobal: true,
      }),
    ProjetoModule, UsuarioModule, AuthModule, AdminModule],
    
  controllers: [],
  providers: [],
})
export class AppModule {}
