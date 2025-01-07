import { CommentCreateNestedManyWithoutDiscussionsInput } from "./CommentCreateNestedManyWithoutDiscussionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionCreateInput = {
  audioContent?: string | null;
  comments?: CommentCreateNestedManyWithoutDiscussionsInput;
  content?: string | null;
  language?: string | null;
  likes?: number | null;
  user?: UserWhereUniqueInput | null;
};
