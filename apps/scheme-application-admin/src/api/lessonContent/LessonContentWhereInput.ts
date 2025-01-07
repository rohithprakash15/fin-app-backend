import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LessonContentWhereInput = {
  audioContent?: StringNullableFilter;
  content?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
  duration?: IntNullableFilter;
  id?: StringFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
};
