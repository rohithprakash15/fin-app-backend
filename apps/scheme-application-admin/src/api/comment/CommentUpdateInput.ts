import { DiscussionWhereUniqueInput } from "../discussion/DiscussionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  audioContent?: string | null;
  content?: string | null;
  discussion?: DiscussionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
