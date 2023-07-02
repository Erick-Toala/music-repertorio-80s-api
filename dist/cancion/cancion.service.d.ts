import { Model } from 'mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDTO } from './dto/cancion.dto';
export declare class CancionService {
    private readonly cancionModel;
    constructor(cancionModel: Model<Cancion>);
    getCanciones(): Promise<Cancion[]>;
    getCancion(cancionID: string): Promise<Cancion>;
    createCancion(createCancionDTO: CreateCancionDTO): Promise<Cancion>;
    deleteCancion(cancionID: string): Promise<Cancion>;
    updateCancion(cancionID: string, createCancionDTO: CreateCancionDTO): Promise<Cancion>;
}
