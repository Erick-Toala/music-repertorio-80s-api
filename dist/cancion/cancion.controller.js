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
exports.CancionController = void 0;
const common_1 = require("@nestjs/common");
const cancion_dto_1 = require("./dto/cancion.dto");
const cancion_service_1 = require("./cancion.service");
let CancionController = class CancionController {
    constructor(cancionService) {
        this.cancionService = cancionService;
    }
    async createPost(res, createCancionDTO) {
        const cancion = await this.cancionService.createCancion(createCancionDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Canción guardada con éxito!',
            cancion: cancion
        });
    }
    async getCanciones(res) {
        const canciones = await this.cancionService.getCanciones();
        res.status(common_1.HttpStatus.OK).json({
            canciones
        });
    }
    async getCancion(res, cancionID) {
        const cancion = await this.cancionService.getCancion(cancionID);
        if (!cancion)
            throw new common_1.NotFoundException('La canción no existe');
        return res.status(common_1.HttpStatus.OK).json(cancion);
    }
    async deleteCancion(res, cancionID) {
        const cancionDeleted = await this.cancionService.deleteCancion(cancionID);
        if (!cancionDeleted)
            throw new common_1.NotFoundException('La canción no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Canción eliminada con éxito!',
            cancionDeleted
        });
    }
    async updateCancion(res, createCancionDTO, cancionID) {
        const cancionUpdate = await this.cancionService.updateCancion(cancionID, createCancionDTO);
        if (!cancionUpdate)
            throw new common_1.NotFoundException('La canción no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Canción actualizada con éxito!',
            cancionUpdate
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cancion_dto_1.CreateCancionDTO]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "getCanciones", null);
__decorate([
    (0, common_1.Get)('/:cancionID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('cancionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "getCancion", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('cancionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "deleteCancion", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('cancionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cancion_dto_1.CreateCancionDTO, Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "updateCancion", null);
CancionController = __decorate([
    (0, common_1.Controller)('cancion'),
    __metadata("design:paramtypes", [cancion_service_1.CancionService])
], CancionController);
exports.CancionController = CancionController;
//# sourceMappingURL=cancion.controller.js.map