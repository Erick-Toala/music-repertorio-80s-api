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
exports.AutorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AutorService = class AutorService {
    constructor(autorModel) {
        this.autorModel = autorModel;
    }
    async getAutores() {
        const autores = await this.autorModel.find();
        return autores;
    }
    async getAutor(autorID) {
        const autor = await this.autorModel.findById(autorID);
        return autor;
    }
    async createAutor(createAutorDTO) {
        const autor = new this.autorModel(createAutorDTO);
        return await autor.save();
    }
    async deleteAutor(autorID) {
        const deleteAutor = await this.autorModel.findByIdAndDelete(autorID);
        return deleteAutor;
    }
    async updateAutor(autorID, createAutorDTO) {
        const updateAutor = await this.autorModel.findByIdAndUpdate(autorID, createAutorDTO, { new: true });
        return updateAutor;
    }
};
AutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Autor')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AutorService);
exports.AutorService = AutorService;
//# sourceMappingURL=autor.service.js.map