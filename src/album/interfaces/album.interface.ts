import {Document} from 'mongoose';

export interface Album extends Document{
    readonly nombre:string;
    readonly disquera:string;
    readonly numCanciones:number;
    readonly cancionPopular:string;
    readonly idArtista:string;
    readonly idCanciones:string;
    readonly urlAlbum:string;
    readonly fechaLanzamiento:Date;
}