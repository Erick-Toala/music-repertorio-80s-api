"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancionModule = void 0;
const common_1 = require("@nestjs/common");
const cancion_controller_1 = require("./cancion.controller");
const cancion_service_1 = require("./cancion.service");
const mongoose_1 = require("@nestjs/mongoose");
const cancion_schema_1 = require("./schemas/cancion.schema");
let CancionModule = class CancionModule {
};
CancionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Cancion', schema: cancion_schema_1.CancionSchema }
            ])
        ],
        controllers: [cancion_controller_1.CancionController],
        providers: [cancion_service_1.CancionService]
    })
], CancionModule);
exports.CancionModule = CancionModule;
//# sourceMappingURL=cancion.module.js.map