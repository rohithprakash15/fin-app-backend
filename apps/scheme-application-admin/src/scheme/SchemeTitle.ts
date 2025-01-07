import { Scheme as TScheme } from "../api/scheme/Scheme";

export const SCHEME_TITLE_FIELD = "title";

export const SchemeTitle = (record: TScheme): string => {
  return record.title?.toString() || String(record.id);
};
