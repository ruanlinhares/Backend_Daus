import { AuthGuard } from "@nestjs/passport";

export class JwtAuhtGuard extends AuthGuard('jwt'){}