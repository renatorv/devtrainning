import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "../create-course.dto/create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    // Como o objeto é mesmo tanto do create quanto do update usa-se PartialType (npm i @nestjs/mapped-types)
}
