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
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DiscussionUpdateManyWithoutUsersInput } from "./DiscussionUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SchemeApplicationUpdateManyWithoutUsersInput } from "./SchemeApplicationUpdateManyWithoutUsersInput";
import { UserProgressUpdateManyWithoutUsersInput } from "./UserProgressUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DiscussionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DiscussionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  discussions?: DiscussionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SchemeApplicationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SchemeApplicationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SchemeApplicationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  schemeApplications?: SchemeApplicationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserProgressUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProgressUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProgressUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userProgresses?: UserProgressUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
