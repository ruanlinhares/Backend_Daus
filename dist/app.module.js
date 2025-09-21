"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const projeto_module_1 = require("./Projetos/projeto.module");
const typeorm_1 = require("@nestjs/typeorm");
const projeto_model_1 = require("./Projetos/projeto.model");
const usuario_module_1 = require("./Usuarios/usuario.module");
const auth_module_1 = require("./Auth/auth.module");
const usuario_model_1 = require("./Usuarios/usuario.model");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'DausDB',
                entities: [projeto_model_1.Projeto, usuario_model_1.Usuario],
                synchronize: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            projeto_module_1.ProjetoModule, usuario_module_1.UsuarioModule, auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map