import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService: CoursesService) { }

    // Rota aninhada => /courses/list
    @Get('list')
    findAll(@Res() response) {
        // return 'Listagem de cursos';
        return response.status(200).send('Listagem de Cursos..');
    }

    @Get(':id')
    findOne(@Param() params) {
        return `Curso #${params.id}`;
    }
    //ou, utilizando descontrução de parametros
    @Get(':id')
    findOne2(@Param('id') id: string) {
        return `Curso #${id}`;
    }

    //Dados no corpo de uma requisição
    // @Post()
    // create(@Body() body) { // pode-se pegar uma campo em especifico create(@Body('name') body){
    //     return body;
    // }

    // No content
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT) // ou @HttpCode(204)
    create(@Body() body) {
        return body;
    }

    // Atualização de registros
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualização do curso #${id}`;
    }

    // Deleção de registros
    @Delete(':id')
    remove(@Param('id') id: string, @Body() body) {
        return `Exclusão do curso #${id}`;
    }
}
