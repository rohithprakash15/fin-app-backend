import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonContentListRelationFilter } from "../lessonContent/LessonContentListRelationFilter";
import { UserProgressListRelationFilter } from "../userProgress/UserProgressListRelationFilter";

export type CourseWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  lessonContents?: LessonContentListRelationFilter;
  title?: StringNullableFilter;
  userProgresses?: UserProgressListRelationFilter;
};
