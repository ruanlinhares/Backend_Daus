"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const criarUsuario_DTO_1 = require("../Usuarios/usuarioSchemas/criarUsuario.DTO");
const login_DTO_1 = require("./authSchemas/login.DTO");
const class_transformer_1 = require("class-transformer");
const listarUsuario_DTO_1 = require("../Usuarios/usuarioSchemas/listarUsuario.DTO");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async cadastro(dto) {
        const usuario = await this.authService.cadastro(dto);
        return (0, class_transformer_1.plainToInstance)(listarUsuario_DTO_1.ListarUsuarioDTO, usuario);
    }
    async login(dto) {
        const usuario = await this.authService.validarUsuario(dto);
        const usuarioRefactor = (0, class_transformer_1.plainToInstance)(listarUsuario_DTO_1.ListarUsuarioDTO, usuario);
        return this.authService.login(usuarioRefactor);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("/cadastro"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criarUsuario_DTO_1.CriarUsuarioDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "cadastro", null);
__decorate([
    (0, common_1.Post)("/login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_DTO_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("/auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map