import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProgressWhereInput = {
  completed?: BooleanNullableFilter;
  completedLessons?: JsonFilter;
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  lastAccessedAt?: DateTimeNullableFilter;
  progress?: IntNullableFilter;
  startedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
