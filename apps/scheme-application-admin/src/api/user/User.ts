import { Comment } from "../comment/Comment";
import { Discussion } from "../discussion/Discussion";
import { JsonValue } from "type-fest";
import { SchemeApplication } from "../schemeApplication/SchemeApplication";
import { UserProgress } from "../userProgress/UserProgress";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  discussions?: Array<Discussion>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  schemeApplications?: Array<SchemeApplication>;
  updatedAt: Date;
  userProgresses?: Array<UserProgress>;
  username: string;
};
