import { SortOrder } from "../../util/SortOrder";

export type UserProgressOrderByInput = {
  completed?: SortOrder;
  completedLessons?: SortOrder;
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastAccessedAt?: SortOrder;
  progress?: SortOrder;
  startedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
