import { InputJsonValue } from "../../types";
import { SchemeApplicationCreateNestedManyWithoutSchemesInput } from "./SchemeApplicationCreateNestedManyWithoutSchemesInput";

export type SchemeCreateInput = {
  applicationProcess?: string | null;
  audioDescription?: string | null;
  benefits?: string | null;
  category?: string | null;
  description?: string | null;
  documents?: InputJsonValue;
  eligibility?: string | null;
  icon?: string | null;
  schemeApplications?: SchemeApplicationCreateNestedManyWithoutSchemesInput;
  title?: string | null;
};
