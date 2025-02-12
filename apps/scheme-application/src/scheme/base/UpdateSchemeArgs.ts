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
import { SchemeWhereUniqueInput } from "./SchemeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SchemeUpdateInput } from "./SchemeUpdateInput";

@ArgsType()
class UpdateSchemeArgs {
  @ApiProperty({
    required: true,
    type: () => SchemeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchemeWhereUniqueInput)
  @Field(() => SchemeWhereUniqueInput, { nullable: false })
  where!: SchemeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SchemeUpdateInput,
  })
  @ValidateNested()
  @Type(() => SchemeUpdateInput)
  @Field(() => SchemeUpdateInput, { nullable: false })
  data!: SchemeUpdateInput;
}

export { UpdateSchemeArgs as UpdateSchemeArgs };
