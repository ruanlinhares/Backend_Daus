import { PartialType } from "@nestjs/mapped-types";
import { CriarProjetosDTO } from "./criaprojetos.DTO";

export class atualizarProjetoDTO extends PartialType(CriarProjetosDTO){}