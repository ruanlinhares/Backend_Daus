import { Module } from "@nestjs/common";
import { UsuarioModule } from "src/Usuarios/usuario.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigService } from "@nestjs/config";


@Module({
    imports:[PassportModule,
        JwtModule.registerAsync({
            /*chave secreta, será utilizada "CHAVE_SECRETA"
            no caso de nao existir arquivo uma chave no arquivo .env
            não commitar essa chave*/
            inject:[ConfigService], 
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('JWT_SECRET'),
                signOptions: {expiresIn: config.get<string>('JWT_EXPIRES_IN')}
            })
            
        }), UsuarioModule],

    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})

export class AuthModule{}