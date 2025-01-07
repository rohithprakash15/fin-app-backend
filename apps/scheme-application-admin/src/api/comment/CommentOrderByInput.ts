import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  audioContent?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  discussionId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
