import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { DiscussionUpdateManyWithoutUsersInput } from "./DiscussionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SchemeApplicationUpdateManyWithoutUsersInput } from "./SchemeApplicationUpdateManyWithoutUsersInput";
import { UserProgressUpdateManyWithoutUsersInput } from "./UserProgressUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  discussions?: DiscussionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  schemeApplications?: SchemeApplicationUpdateManyWithoutUsersInput;
  userProgresses?: UserProgressUpdateManyWithoutUsersInput;
  username?: string;
};
