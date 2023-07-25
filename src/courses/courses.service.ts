import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    //********************************/
    // Estrutura de dados em memória
    //********************************/
    private courses: Course[] = [
        { id: 1, name: "Fundamentos do Framework NestJS", description: "Fundamentos do Framework NestJS", tags: ["node.js", "nestjs", "javascript"], },
    ];

    //********************/
    // Métodos do Service
    //********************/
    findAll() {
        return this.courses;
    }

    findOne(id: string) {

        const course = this.courses.find((course) => course.id === Number(id));

        if(!course){
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND);
        };
        return course;
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        // buscar o id no array de dados
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id),);

        // atualiza o item encontrado
        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id),);

        // Senão encontrar nada retorna -1

        if(indexCourse >= 0){
            this.courses.splice(indexCourse, 1);
        }
    }
}
