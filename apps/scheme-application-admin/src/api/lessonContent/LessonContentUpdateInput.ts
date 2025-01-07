import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonContentUpdateInput = {
  audioContent?: string | null;
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  duration?: number | null;
  order?: number | null;
  title?: string | null;
};
