import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDTO } from "./create-movie.dto";

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {
    //참조하는 DTO의 멤버변수들을 선택적으로 업데이트 하기 위해 사용
}