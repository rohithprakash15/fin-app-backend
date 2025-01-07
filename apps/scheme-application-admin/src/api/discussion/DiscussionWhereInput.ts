import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionWhereInput = {
  audioContent?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  likes?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
