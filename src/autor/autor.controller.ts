import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateAutorDTO} from './dto/autor.dto';
import {AutorService} from './autor.service';

@Controller('autor')
export class AutorController {

    constructor(private autorService: AutorService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createAutorDTO:CreateAutorDTO){
        const autor = await this.autorService.createAutor(createAutorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Autor guardado con éxito!',
            autor
        })
    }

    @Get('/')
    async getAutores(@Res() res){
        const autores = await this.autorService.getAutores();
        res.status(HttpStatus.OK).json({
            autores
        })
    }

    @Get('/:autorID')
    async getCancion(@Res() res, @Param('autorID') autorID){
        const autor = await this.autorService.getAutor(autorID);
        if(!autor)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json(autor);
    }

    @Delete('/delete')
    async deleteAutor(@Res() res, @Query('autorID') autorID){
        const autorDeleted = await this.autorService.deleteAutor(autorID);
        if(!autorDeleted)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json({
            message:'Autor eliminada con éxito!',
            autorDeleted
        });
    }

    @Put('/update')
    async updateAutor(@Res() res, @Body() createAutorDTO:CreateAutorDTO, @Query('autorID')autorID){
        const actorUpdate = await this.autorService.updateAutor(autorID, createAutorDTO);
        if(!actorUpdate)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json({
            message:'Autor actualizada con éxito!',
            actorUpdate
        });
    }
}
