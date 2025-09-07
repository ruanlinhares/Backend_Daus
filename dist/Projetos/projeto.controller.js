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
exports.ProjetoController = void 0;
const common_1 = require("@nestjs/common");
const projeto_service_1 = require("./projeto.service");
let ProjetoController = class ProjetoController {
    projetoService;
    constructor(projetoService) {
        this.projetoService = projetoService;
    }
    async inserirProjeto(novoProjeto) {
        return this.projetoService.inserir(novoProjeto);
    }
    listarProjetos() {
        return "oi, aqui estão os projetosss!!";
    }
};
exports.ProjetoController = ProjetoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "inserirProjeto", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProjetoController.prototype, "listarProjetos", null);
exports.ProjetoController = ProjetoController = __decorate([
    (0, common_1.Controller)("/projetos"),
    __metadata("design:paramtypes", [projeto_service_1.ProjetoService])
], ProjetoController);
//# sourceMappingURL=projeto.controller.js.map