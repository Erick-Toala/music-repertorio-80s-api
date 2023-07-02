"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AlbumSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    disquera: String,
    numCanciones: Number,
    cancionPopular: { type: mongoose_1.Schema.Types.ObjectId, ref: "Cancion" },
    idArtista: { type: mongoose_1.Schema.Types.ObjectId, ref: "Autor" },
    idCanciones: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Cancion" }],
    urlAlbum: String,
    fechaLanzamiento: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=album.schema.js.map