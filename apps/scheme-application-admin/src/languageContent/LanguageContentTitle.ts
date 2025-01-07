import { LanguageContent as TLanguageContent } from "../api/languageContent/LanguageContent";

export const LANGUAGECONTENT_TITLE_FIELD = "audioContent";

export const LanguageContentTitle = (record: TLanguageContent): string => {
  return record.audioContent?.toString() || String(record.id);
};
