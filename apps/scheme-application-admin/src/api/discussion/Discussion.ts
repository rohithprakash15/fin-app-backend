import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Discussion = {
  audioContent: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  language: string | null;
  likes: number | null;
  updatedAt: Date;
  user?: User | null;
};
