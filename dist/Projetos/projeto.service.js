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
exports.ProjetoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const projeto_model_1 = require("./projeto.model");
const typeorm_2 = require("typeorm");
let ProjetoService = class ProjetoService {
    projetoRepository;
    constructor(projetoRepository) {
        this.projetoRepository = projetoRepository;
    }
    async inserirProjeto(dto) {
        const projeto = this.projetoRepository.create(dto);
        return await this.projetoRepository.save(projeto);
    }
    async listarTodosProjetos() {
        return await this.projetoRepository.find();
    }
    async listarPorId(projetoId) {
        const projeto = await this.projetoRepository.findOne({ where: { id: projetoId } });
        if (!projeto) {
            throw new common_1.NotFoundException("Projeto não encontrado");
        }
        return projeto;
    }
    async atualizarProjeto(projetoId, dto) {
        const projeto = await this.projetoRepository.findOne({ where: { id: projetoId } });
        if (!projeto) {
            throw new common_1.NotFoundException("Projeto não encontrado");
        }
        Object.assign(projeto, dto);
        return await this.projetoRepository.save(projeto);
    }
    async deletarProjeto(projetoId) {
        const projetoDeletado = await this.projetoRepository.delete(projetoId);
        return "Projeto deletado";
    }
};
exports.ProjetoService = ProjetoService;
exports.ProjetoService = ProjetoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(projeto_model_1.Projeto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjetoService);
//# sourceMappingURL=projeto.service.js.map