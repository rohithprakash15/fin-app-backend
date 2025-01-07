import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "audioContent";

export const CommentTitle = (record: TComment): string => {
  return record.audioContent?.toString() || String(record.id);
};
