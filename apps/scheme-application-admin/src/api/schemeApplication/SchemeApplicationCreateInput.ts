import { InputJsonValue } from "../../types";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SchemeApplicationCreateInput = {
  documents?: InputJsonValue;
  scheme?: SchemeWhereUniqueInput | null;
  status?: string | null;
  submittedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
