import { AuthService } from "./auth.service";
import { CadastroDTO } from "./authSchemas/cadastro.DTO";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    cadastro(dto: CadastroDTO): Promise<void>;
    login(): void;
}
