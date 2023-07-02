import { Model } from 'mongoose';
import { Album } from './interfaces/album.interface';
import { CreateAlbumDTO } from './dto/album.dto';
export declare class AlbumService {
    private readonly albumModel;
    constructor(albumModel: Model<Album>);
    getAlbumes(): Promise<Album[]>;
    getAlbum(albumID: string): Promise<Album>;
    createAlbum(createAlbumDTO: CreateAlbumDTO): Promise<Album>;
    deleteAlbum(albumID: string): Promise<Album>;
    updateAlbum(albumID: string, createAlbumDTO: CreateAlbumDTO): Promise<Album>;
}
