import { JsonValue } from "type-fest";
import { Scheme } from "../scheme/Scheme";
import { User } from "../user/User";

export type SchemeApplication = {
  createdAt: Date;
  documents: JsonValue;
  id: string;
  scheme?: Scheme | null;
  status: string | null;
  submittedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
