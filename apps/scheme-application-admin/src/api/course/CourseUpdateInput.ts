import { LessonContentUpdateManyWithoutCoursesInput } from "./LessonContentUpdateManyWithoutCoursesInput";
import { UserProgressUpdateManyWithoutCoursesInput } from "./UserProgressUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  category?: string | null;
  description?: string | null;
  icon?: string | null;
  lessonContents?: LessonContentUpdateManyWithoutCoursesInput;
  title?: string | null;
  userProgresses?: UserProgressUpdateManyWithoutCoursesInput;
};
