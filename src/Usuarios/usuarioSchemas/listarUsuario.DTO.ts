import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ListarUsuarioDTO{

    @Expose()
    nomeUsuario: string;
    @Expose()
    emailUsuario: string;
}