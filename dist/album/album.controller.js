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
exports.AlbumController = void 0;
const common_1 = require("@nestjs/common");
const album_dto_1 = require("./dto/album.dto");
const album_service_1 = require("./album.service");
let AlbumController = class AlbumController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    async createPost(res, createAlbumDTO) {
        const album = await this.albumService.createAlbum(createAlbumDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Álbum guardada con éxito!',
            album: album
        });
    }
    async getAlbumes(res) {
        const albumes = await this.albumService.getAlbumes();
        res.status(common_1.HttpStatus.OK).json({
            albumes
        });
    }
    async getAlbum(res, albumID) {
        const album = await this.albumService.getAlbum(albumID);
        if (!album)
            throw new common_1.NotFoundException('La álbum no existe');
        return res.status(common_1.HttpStatus.OK).json(album);
    }
    async deleteAlbum(res, albumID) {
        const albumDeleted = await this.albumService.deleteAlbum(albumID);
        if (!albumDeleted)
            throw new common_1.NotFoundException('El álbum  no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Álbum eliminada con éxito!',
            albumDeleted
        });
    }
    async updateAlbum(res, createAlbumDTO, albumID) {
        const albumUpdate = await this.albumService.updateAlbum(albumID, createAlbumDTO);
        if (!albumUpdate)
            throw new common_1.NotFoundException('El álbum  no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Álbum actualizada con éxito!',
            albumUpdate
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, album_dto_1.CreateAlbumDTO]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getAlbumes", null);
__decorate([
    (0, common_1.Get)('/:albumID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('albumID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getAlbum", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('albumID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "deleteAlbum", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('albumID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, album_dto_1.CreateAlbumDTO, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "updateAlbum", null);
AlbumController = __decorate([
    (0, common_1.Controller)('album'),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map