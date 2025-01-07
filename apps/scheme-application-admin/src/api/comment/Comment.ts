import { Discussion } from "../discussion/Discussion";
import { User } from "../user/User";

export type Comment = {
  audioContent: string | null;
  content: string | null;
  createdAt: Date;
  discussion?: Discussion | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
