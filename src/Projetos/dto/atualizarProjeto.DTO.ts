import { PartialType } from "@nestjs/mapped-types";
import { CriarProjetoDTO } from "./criaProjeto.DTO";

export class atualizarProjetoDTO extends PartialType(CriarProjetoDTO){}