/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SchemeApplicationWhereInput } from "./SchemeApplicationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SchemeApplicationOrderByInput } from "./SchemeApplicationOrderByInput";

@ArgsType()
class SchemeApplicationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SchemeApplicationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SchemeApplicationWhereInput, { nullable: true })
  @Type(() => SchemeApplicationWhereInput)
  where?: SchemeApplicationWhereInput;

  @ApiProperty({
    required: false,
    type: [SchemeApplicationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SchemeApplicationOrderByInput], { nullable: true })
  @Type(() => SchemeApplicationOrderByInput)
  orderBy?: Array<SchemeApplicationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SchemeApplicationFindManyArgs as SchemeApplicationFindManyArgs };
