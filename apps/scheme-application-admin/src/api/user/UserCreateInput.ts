import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { DiscussionCreateNestedManyWithoutUsersInput } from "./DiscussionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SchemeApplicationCreateNestedManyWithoutUsersInput } from "./SchemeApplicationCreateNestedManyWithoutUsersInput";
import { UserProgressCreateNestedManyWithoutUsersInput } from "./UserProgressCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  discussions?: DiscussionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  schemeApplications?: SchemeApplicationCreateNestedManyWithoutUsersInput;
  userProgresses?: UserProgressCreateNestedManyWithoutUsersInput;
  username: string;
};
