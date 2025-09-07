import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetoModule } from './Projetos/projeto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './Projetos/projeto.model';

@Module({
  imports: [ 
      TypeOrmModule.forRoot({
      type: 'mariadb', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'DausDB',
      entities: [Projeto],
      synchronize: true, 
    }), ProjetoModule],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
