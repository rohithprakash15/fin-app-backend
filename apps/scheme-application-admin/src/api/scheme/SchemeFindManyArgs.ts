import { SchemeWhereInput } from "./SchemeWhereInput";
import { SchemeOrderByInput } from "./SchemeOrderByInput";

export type SchemeFindManyArgs = {
  where?: SchemeWhereInput;
  orderBy?: Array<SchemeOrderByInput>;
  skip?: number;
  take?: number;
};
