import { Schema } from 'mongoose';


export const CancionSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    duracion:String,
    idArtista:{type: Schema.Types.ObjectId, ref:"Autor"},
    idAlbum:String,
    urlPortada:String,
    urlYouTube:String,
    fechaLanzamiento:{
        type:Date,
        default:Date.now
    }
});