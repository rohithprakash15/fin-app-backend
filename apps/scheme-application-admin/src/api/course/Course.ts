import { LessonContent } from "../lessonContent/LessonContent";
import { UserProgress } from "../userProgress/UserProgress";

export type Course = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  icon: string | null;
  id: string;
  lessonContents?: Array<LessonContent>;
  title: string | null;
  updatedAt: Date;
  userProgresses?: Array<UserProgress>;
};
