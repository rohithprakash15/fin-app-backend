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
import { DiscussionWhereUniqueInput } from "./DiscussionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DiscussionUpdateInput } from "./DiscussionUpdateInput";

@ArgsType()
class UpdateDiscussionArgs {
  @ApiProperty({
    required: true,
    type: () => DiscussionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereUniqueInput)
  @Field(() => DiscussionWhereUniqueInput, { nullable: false })
  where!: DiscussionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DiscussionUpdateInput,
  })
  @ValidateNested()
  @Type(() => DiscussionUpdateInput)
  @Field(() => DiscussionUpdateInput, { nullable: false })
  data!: DiscussionUpdateInput;
}

export { UpdateDiscussionArgs as UpdateDiscussionArgs };
