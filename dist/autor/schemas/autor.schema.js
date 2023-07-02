"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AutorSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    nacionalidad: String,
    fechaNacimiento: {
        type: Date,
        default: Date.now
    },
    urlFoto: String,
    urlYouTube: String
});
//# sourceMappingURL=autor.schema.js.map