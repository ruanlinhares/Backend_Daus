import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate{

    constructor(private reflector:Reflector){};

    canActivate(context: ExecutionContext): boolean{
        
        const rolesRequeridas = this.reflector.getAllAndOverride<string[]>('roles', [context.getHandler(), context.getClass(),]);

        if(!rolesRequeridas) return true;

        const {user} = context.switchToHttp().getRequest();
        
        return rolesRequeridas.some(role => user.role?.includes(role));
    }
}