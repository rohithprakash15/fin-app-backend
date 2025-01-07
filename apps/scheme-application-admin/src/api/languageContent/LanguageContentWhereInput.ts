import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageContentWhereInput = {
  audioContent?: StringNullableFilter;
  contentId?: StringNullableFilter;
  contentType?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  textContent?: StringNullableFilter;
};
