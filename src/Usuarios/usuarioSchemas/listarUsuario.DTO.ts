import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ListarUsuarioDTO{

    @Expose()
    id:string;
    @Expose()
    nomeUsuario: string;
    @Expose()
    emailUsuario: string;
    @Expose()
    roleUsuario:string;

}