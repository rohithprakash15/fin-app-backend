import { Course } from "../course/Course";

export type LessonContent = {
  audioContent: string | null;
  content: string | null;
  course?: Course | null;
  createdAt: Date;
  duration: number | null;
  id: string;
  order: number | null;
  title: string | null;
  updatedAt: Date;
};
