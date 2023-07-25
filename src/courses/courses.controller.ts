import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService: CoursesService) { }

    // Rota aninhada => /courses/list
    // @Get('list')
    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.courseService.findOne(id);
    }

    //ou, utilizando descontrução de parametros
    @Get(':id')
    findOne2(@Param('id') id: string) {
        return `Curso #${id}`;
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto){
        return this.courseService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCourseDto: UpdateCourseDto ){
        return this.courseService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.courseService.remove(id);

    }

    //Dados no corpo de uma requisição
    // @Post()
    // create(@Body() body) { // pode-se pegar uma campo em especifico create(@Body('name') body){
    //     return body;
    // }

    // // No content
    // @Post()
    // @HttpCode(HttpStatus.NO_CONTENT) // ou @HttpCode(204)
    // create(@Body() body) {
    //     return body;
    // }

    // // Atualização de registros
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() body) {
    //     return `Atualização do curso #${id}`;
    // }

    // // Deleção de registros
    // @Delete(':id')
    // remove(@Param('id') id: string, @Body() body) {
    //     return `Exclusão do curso #${id}`;
    // }
}
