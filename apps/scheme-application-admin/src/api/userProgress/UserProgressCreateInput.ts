import { InputJsonValue } from "../../types";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProgressCreateInput = {
  completed?: boolean | null;
  completedLessons?: InputJsonValue;
  course?: CourseWhereUniqueInput | null;
  lastAccessedAt?: Date | null;
  progress?: number | null;
  startedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
