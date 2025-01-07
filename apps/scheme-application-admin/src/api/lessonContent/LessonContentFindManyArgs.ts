import { LessonContentWhereInput } from "./LessonContentWhereInput";
import { LessonContentOrderByInput } from "./LessonContentOrderByInput";

export type LessonContentFindManyArgs = {
  where?: LessonContentWhereInput;
  orderBy?: Array<LessonContentOrderByInput>;
  skip?: number;
  take?: number;
};
