import { SchemeApplication as TSchemeApplication } from "../api/schemeApplication/SchemeApplication";

export const SCHEMEAPPLICATION_TITLE_FIELD = "status";

export const SchemeApplicationTitle = (record: TSchemeApplication): string => {
  return record.status?.toString() || String(record.id);
};
