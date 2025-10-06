import { Controller, UseGuards } from "@nestjs/common";
import { Roles } from "src/Auth/authDecorators/roles.decorator";
import { JwtAuhtGuard } from "src/Auth/authGuards/jwt-auth.guard";
import { RolesGuard } from "src/Auth/authGuards/roles.guard";

@UseGuards(JwtAuhtGuard, RolesGuard)
@Controller()
export class adminController{

    @Roles('admin')
    aprovarProjeto(){}//trocar o status de analize para aprovado ou reporvado

    inserirBlacklist(){}//colocar usuario em blacklist por segurança

    alterarNivelAcesso(){}//alterar nível de usuário para admin ou remover
}