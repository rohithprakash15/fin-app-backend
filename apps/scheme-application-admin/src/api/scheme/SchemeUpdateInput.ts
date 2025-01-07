import { InputJsonValue } from "../../types";
import { SchemeApplicationUpdateManyWithoutSchemesInput } from "./SchemeApplicationUpdateManyWithoutSchemesInput";

export type SchemeUpdateInput = {
  applicationProcess?: string | null;
  audioDescription?: string | null;
  benefits?: string | null;
  category?: string | null;
  description?: string | null;
  documents?: InputJsonValue;
  eligibility?: string | null;
  icon?: string | null;
  schemeApplications?: SchemeApplicationUpdateManyWithoutSchemesInput;
  title?: string | null;
};
