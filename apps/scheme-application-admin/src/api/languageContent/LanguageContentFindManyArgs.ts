import { LanguageContentWhereInput } from "./LanguageContentWhereInput";
import { LanguageContentOrderByInput } from "./LanguageContentOrderByInput";

export type LanguageContentFindManyArgs = {
  where?: LanguageContentWhereInput;
  orderBy?: Array<LanguageContentOrderByInput>;
  skip?: number;
  take?: number;
};
