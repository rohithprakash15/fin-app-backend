import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchemeApplicationListRelationFilter } from "../schemeApplication/SchemeApplicationListRelationFilter";

export type SchemeWhereInput = {
  applicationProcess?: StringNullableFilter;
  audioDescription?: StringNullableFilter;
  benefits?: StringNullableFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  documents?: JsonFilter;
  eligibility?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  schemeApplications?: SchemeApplicationListRelationFilter;
  title?: StringNullableFilter;
};
