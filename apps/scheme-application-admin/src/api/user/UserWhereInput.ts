import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { DiscussionListRelationFilter } from "../discussion/DiscussionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchemeApplicationListRelationFilter } from "../schemeApplication/SchemeApplicationListRelationFilter";
import { UserProgressListRelationFilter } from "../userProgress/UserProgressListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  discussions?: DiscussionListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  schemeApplications?: SchemeApplicationListRelationFilter;
  userProgresses?: UserProgressListRelationFilter;
  username?: StringFilter;
};
