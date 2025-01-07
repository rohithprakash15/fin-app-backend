import { LessonContentCreateNestedManyWithoutCoursesInput } from "./LessonContentCreateNestedManyWithoutCoursesInput";
import { UserProgressCreateNestedManyWithoutCoursesInput } from "./UserProgressCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  category?: string | null;
  description?: string | null;
  icon?: string | null;
  lessonContents?: LessonContentCreateNestedManyWithoutCoursesInput;
  title?: string | null;
  userProgresses?: UserProgressCreateNestedManyWithoutCoursesInput;
};
