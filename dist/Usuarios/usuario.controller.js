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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const criarUsuario_DTO_1 = require("./usuarioSchemas/criarUsuario.DTO");
const class_transformer_1 = require("class-transformer");
const listarUsuario_DTO_1 = require("./usuarioSchemas/listarUsuario.DTO");
const atualizarUsuario_DTO_1 = require("./usuarioSchemas/atualizarUsuario.DTO");
let UsuarioController = class UsuarioController {
    usuarioService;
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async inserir(dto) {
        const projeto = await this.usuarioService.inserirUsuario(dto);
        return (0, class_transformer_1.plainToInstance)(listarUsuario_DTO_1.ListarUsuarioDTO, dto);
    }
    async listar() {
        const projeto = await this.usuarioService.listarTodosUsuarios();
        return (0, class_transformer_1.plainToInstance)(listarUsuario_DTO_1.ListarUsuarioDTO, projeto);
    }
    async listaId(usuarioId) {
        const projeto = await this.usuarioService.listarUsuarioId(usuarioId);
        return (0, class_transformer_1.plainToInstance)(listarUsuario_DTO_1.ListarUsuarioDTO, projeto);
    }
    async atualizar(usuarioId, dto) {
        const usuarioAtualizado = await this.usuarioService.atualizarUsuario(usuarioId, dto);
        return (0, class_transformer_1.plainToInstance)(listarUsuario_DTO_1.ListarUsuarioDTO, usuarioAtualizado);
    }
    async deletar(usuarioId) {
        return await this.usuarioService.deletarUsuario(usuarioId);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)("/inserir"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criarUsuario_DTO_1.CriarUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "inserir", null);
__decorate([
    (0, common_1.Get)("/listar"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listaId", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizarUsuario_DTO_1.AtualizarUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deletar", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)("/usuarios"),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map