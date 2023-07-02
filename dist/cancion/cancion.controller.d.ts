import { CreateCancionDTO } from './dto/cancion.dto';
import { CancionService } from './cancion.service';
export declare class CancionController {
    private cancionService;
    constructor(cancionService: CancionService);
    createPost(res: any, createCancionDTO: CreateCancionDTO): Promise<any>;
    getCanciones(res: any): Promise<void>;
    getCancion(res: any, cancionID: any): Promise<any>;
    deleteCancion(res: any, cancionID: any): Promise<any>;
    updateCancion(res: any, createCancionDTO: CreateCancionDTO, cancionID: any): Promise<any>;
}
