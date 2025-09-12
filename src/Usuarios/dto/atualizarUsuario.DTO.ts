import { PartialType } from "@nestjs/mapped-types";
import { CriarUsuarioDTO } from "./criarUsuario.DTO";

export class AtualizarUsuaio extends PartialType(CriarUsuarioDTO){}