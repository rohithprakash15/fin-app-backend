/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LessonContentUpdateManyWithoutCoursesInput } from "./LessonContentUpdateManyWithoutCoursesInput";
import { Type } from "class-transformer";
import { UserProgressUpdateManyWithoutCoursesInput } from "./UserProgressUpdateManyWithoutCoursesInput";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  icon?: string | null;

  @ApiProperty({
    required: false,
    type: () => LessonContentUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => LessonContentUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => LessonContentUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  lessonContents?: LessonContentUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserProgressUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => UserProgressUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => UserProgressUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  userProgresses?: UserProgressUpdateManyWithoutCoursesInput;
}

export { CourseUpdateInput as CourseUpdateInput };
