import { JsonValue } from "type-fest";
import { SchemeApplication } from "../schemeApplication/SchemeApplication";

export type Scheme = {
  applicationProcess: string | null;
  audioDescription: string | null;
  benefits: string | null;
  category: string | null;
  createdAt: Date;
  description: string | null;
  documents: JsonValue;
  eligibility: string | null;
  icon: string | null;
  id: string;
  schemeApplications?: Array<SchemeApplication>;
  title: string | null;
  updatedAt: Date;
};
