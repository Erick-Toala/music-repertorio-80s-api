"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CancionSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    duracion: String,
    idArtista: { type: mongoose_1.Schema.Types.ObjectId, ref: "Autor" },
    idAlbum: String,
    urlPortada: String,
    urlYouTube: String,
    fechaLanzamiento: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=cancion.schema.js.map