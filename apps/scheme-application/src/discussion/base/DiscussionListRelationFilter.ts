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
import { DiscussionWhereInput } from "./DiscussionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiscussionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereInput)
  @IsOptional()
  @Field(() => DiscussionWhereInput, {
    nullable: true,
  })
  every?: DiscussionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereInput)
  @IsOptional()
  @Field(() => DiscussionWhereInput, {
    nullable: true,
  })
  some?: DiscussionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereInput)
  @IsOptional()
  @Field(() => DiscussionWhereInput, {
    nullable: true,
  })
  none?: DiscussionWhereInput;
}
export { DiscussionListRelationFilter as DiscussionListRelationFilter };
