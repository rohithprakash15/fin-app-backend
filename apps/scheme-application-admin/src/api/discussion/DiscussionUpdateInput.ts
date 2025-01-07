import { CommentUpdateManyWithoutDiscussionsInput } from "./CommentUpdateManyWithoutDiscussionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionUpdateInput = {
  audioContent?: string | null;
  comments?: CommentUpdateManyWithoutDiscussionsInput;
  content?: string | null;
  language?: string | null;
  likes?: number | null;
  user?: UserWhereUniqueInput | null;
};
