import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetoModule } from './Projetos/projeto.module';

@Module({
  imports: [ProjetoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
