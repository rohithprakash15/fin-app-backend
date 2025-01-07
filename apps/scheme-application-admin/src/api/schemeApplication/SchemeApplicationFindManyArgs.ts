import { SchemeApplicationWhereInput } from "./SchemeApplicationWhereInput";
import { SchemeApplicationOrderByInput } from "./SchemeApplicationOrderByInput";

export type SchemeApplicationFindManyArgs = {
  where?: SchemeApplicationWhereInput;
  orderBy?: Array<SchemeApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
