import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscussionWhereUniqueInput } from "../discussion/DiscussionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  audioContent?: StringNullableFilter;
  content?: StringNullableFilter;
  discussion?: DiscussionWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
