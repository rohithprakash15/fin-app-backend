import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SchemeApplicationWhereInput = {
  documents?: JsonFilter;
  id?: StringFilter;
  scheme?: SchemeWhereUniqueInput;
  status?: StringNullableFilter;
  submittedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
