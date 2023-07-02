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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AlbumService = class AlbumService {
    constructor(albumModel) {
        this.albumModel = albumModel;
    }
    async getAlbumes() {
        const albumes = await this.albumModel.find().populate('cancionPopular idArtista', 'nombre').populate('idCanciones', 'nombre').exec();
        return albumes;
    }
    async getAlbum(albumID) {
        const album = await this.albumModel.findById(albumID).populate('idArtista', 'nombre').exec();
        ;
        return album;
    }
    async createAlbum(createAlbumDTO) {
        const album = new this.albumModel(createAlbumDTO);
        return await album.save();
    }
    async deleteAlbum(albumID) {
        const deleteAlbum = await this.albumModel.findByIdAndDelete(albumID);
        return deleteAlbum;
    }
    async updateAlbum(albumID, createAlbumDTO) {
        const updateAlbum = await this.albumModel.findByIdAndUpdate(albumID, createAlbumDTO, { new: true });
        return updateAlbum;
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Album')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map