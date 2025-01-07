import { LessonContent as TLessonContent } from "../api/lessonContent/LessonContent";

export const LESSONCONTENT_TITLE_FIELD = "title";

export const LessonContentTitle = (record: TLessonContent): string => {
  return record.title?.toString() || String(record.id);
};
