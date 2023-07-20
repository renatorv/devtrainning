import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    // Rota aninhada => /courses/list
    @Get('list')
    findAll() {
        return 'Listagem de cursos';
    }

    @Get(':id')
    findOne(@Param() params) {
        return `Curso #${params.id}`;
    }
    //ou, utilizando descontrução de parametros
    @Get(':id')
    findOne2(@Param('id') id: string){
        return `Curso #${id}`;
    }

    //Dados no corpo de uma requisição
    @Post()
    create(@Body() body){ // pode-se pegar uma campo em especifico create(@Body('name') body){
        return body;
    }
}
