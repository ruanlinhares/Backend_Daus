import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "./authSchemas/jwtPayload.DTO";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    
    constructor(config:ConfigService){
        const secret = config.get<string>('JWT_SECRET');
        
        if (!secret) {
            throw new Error('JWT_SECRET não definido no .env');
        }
        
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: secret,
        });
    }

    async validate(payload: JwtPayload){
        console.log('Payload recebido:', payload);
        return {sub: payload.sub, username: payload.username, role: payload.role,}
    }
}