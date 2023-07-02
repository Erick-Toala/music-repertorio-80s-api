import { Model } from 'mongoose';
import { Autor } from './interfaces/autor.interface';
import { CreateAutorDTO } from './dto/autor.dto';
export declare class AutorService {
    private readonly autorModel;
    constructor(autorModel: Model<Autor>);
    getAutores(): Promise<Autor[]>;
    getAutor(autorID: string): Promise<Autor>;
    createAutor(createAutorDTO: CreateAutorDTO): Promise<Autor>;
    deleteAutor(autorID: string): Promise<Autor>;
    updateAutor(autorID: string, createAutorDTO: CreateAutorDTO): Promise<Autor>;
}
