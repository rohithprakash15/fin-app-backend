import { SortOrder } from "../../util/SortOrder";

export type LessonContentOrderByInput = {
  audioContent?: SortOrder;
  content?: SortOrder;
  courseId?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  order?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
