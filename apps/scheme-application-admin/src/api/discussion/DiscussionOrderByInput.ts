import { SortOrder } from "../../util/SortOrder";

export type DiscussionOrderByInput = {
  audioContent?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  likes?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
