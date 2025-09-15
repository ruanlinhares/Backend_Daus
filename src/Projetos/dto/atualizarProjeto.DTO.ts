import { PartialType } from "@nestjs/mapped-types";
import { CriarProjetoDTO } from "./criarProjeto.DTO";

export class atualizarProjetoDTO extends PartialType(CriarProjetoDTO){}