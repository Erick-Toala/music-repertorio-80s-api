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
exports.AutorController = void 0;
const common_1 = require("@nestjs/common");
const autor_dto_1 = require("./dto/autor.dto");
const autor_service_1 = require("./autor.service");
let AutorController = class AutorController {
    constructor(autorService) {
        this.autorService = autorService;
    }
    async createPost(res, createAutorDTO) {
        const autor = await this.autorService.createAutor(createAutorDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Autor guardado con éxito!',
            autor
        });
    }
    async getAutores(res) {
        const autores = await this.autorService.getAutores();
        res.status(common_1.HttpStatus.OK).json({
            autores
        });
    }
    async getCancion(res, autorID) {
        const autor = await this.autorService.getAutor(autorID);
        if (!autor)
            throw new common_1.NotFoundException('El autor no existe');
        return res.status(common_1.HttpStatus.OK).json(autor);
    }
    async deleteAutor(res, autorID) {
        const autorDeleted = await this.autorService.deleteAutor(autorID);
        if (!autorDeleted)
            throw new common_1.NotFoundException('El autor no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Autor eliminada con éxito!',
            autorDeleted
        });
    }
    async updateAutor(res, createAutorDTO, autorID) {
        const actorUpdate = await this.autorService.updateAutor(autorID, createAutorDTO);
        if (!actorUpdate)
            throw new common_1.NotFoundException('El autor no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Autor actualizada con éxito!',
            actorUpdate
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, autor_dto_1.CreateAutorDTO]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "getAutores", null);
__decorate([
    (0, common_1.Get)('/:autorID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('autorID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "getCancion", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('autorID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "deleteAutor", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('autorID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, autor_dto_1.CreateAutorDTO, Object]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "updateAutor", null);
AutorController = __decorate([
    (0, common_1.Controller)('autor'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
exports.AutorController = AutorController;
//# sourceMappingURL=autor.controller.js.map