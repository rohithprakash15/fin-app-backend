import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
