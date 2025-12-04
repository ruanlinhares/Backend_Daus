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
      type: 'postgres',
      url: "postgresql://daus_db_user:4z6IyXFL6izVebJR6ebPPtrMDaP5taXJ@dpg-d4odm0re5dus73c66chg-a/daus_db",
      host: 'dpg-d4odm0re5dus73c66chg-a',
      port: 5432,
      username: 'daus_db_user',
      password: '4z6IyXFL6izVebJR6ebPPtrMDaP5taXJ',
      database: 'daus_db',
      entities: [Projeto, Usuario],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),

    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local', '.env.example'],
      isGlobal: true,
    }),
    ProjetoModule, UsuarioModule, AuthModule, AdminModule],

  controllers: [],
  providers: [],
})
export class AppModule { }
