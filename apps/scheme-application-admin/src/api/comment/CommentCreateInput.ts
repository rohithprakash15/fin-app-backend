import { DiscussionWhereUniqueInput } from "../discussion/DiscussionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  audioContent?: string | null;
  content?: string | null;
  discussion?: DiscussionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
