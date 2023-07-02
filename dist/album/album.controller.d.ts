import { CreateAlbumDTO } from './dto/album.dto';
import { AlbumService } from './album.service';
export declare class AlbumController {
    private albumService;
    constructor(albumService: AlbumService);
    createPost(res: any, createAlbumDTO: CreateAlbumDTO): Promise<any>;
    getAlbumes(res: any): Promise<void>;
    getAlbum(res: any, albumID: any): Promise<any>;
    deleteAlbum(res: any, albumID: any): Promise<any>;
    updateAlbum(res: any, createAlbumDTO: CreateAlbumDTO, albumID: any): Promise<any>;
}
