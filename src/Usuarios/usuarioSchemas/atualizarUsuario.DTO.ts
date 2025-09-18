import { PartialType } from "@nestjs/mapped-types";
import { CriarUsuarioDTO } from "./criarUsuario.DTO";

export class AtualizarUsuarioDTO extends PartialType(CriarUsuarioDTO){}