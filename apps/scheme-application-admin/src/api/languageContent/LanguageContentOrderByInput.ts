import { SortOrder } from "../../util/SortOrder";

export type LanguageContentOrderByInput = {
  audioContent?: SortOrder;
  contentId?: SortOrder;
  contentType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  textContent?: SortOrder;
  updatedAt?: SortOrder;
};
