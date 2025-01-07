import { JsonValue } from "type-fest";
import { Course } from "../course/Course";
import { User } from "../user/User";

export type UserProgress = {
  completed: boolean | null;
  completedLessons: JsonValue;
  course?: Course | null;
  createdAt: Date;
  id: string;
  lastAccessedAt: Date | null;
  progress: number | null;
  startedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
