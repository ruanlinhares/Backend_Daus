import {IsEnum, IsNotEmpty} from 'class-validator';

export enum NivelAcesso{
    USER = 'user',
    ADMIN = 'admin',
    SUPERADMIN = 'superadmin'
}

export class AlterarNivelDeAcesso {
    @IsNotEmpty()
    @IsEnum(NivelAcesso, { message: 'nivel de acesso deve ser: user, admin ou superadmin'})
    nivelAcesso: NivelAcesso;
}