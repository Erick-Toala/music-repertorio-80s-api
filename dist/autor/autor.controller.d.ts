import { CreateAutorDTO } from './dto/autor.dto';
import { AutorService } from './autor.service';
export declare class AutorController {
    private autorService;
    constructor(autorService: AutorService);
    createPost(res: any, createAutorDTO: CreateAutorDTO): Promise<any>;
    getAutores(res: any): Promise<void>;
    getCancion(res: any, autorID: any): Promise<any>;
    deleteAutor(res: any, autorID: any): Promise<any>;
    updateAutor(res: any, createAutorDTO: CreateAutorDTO, autorID: any): Promise<any>;
}
