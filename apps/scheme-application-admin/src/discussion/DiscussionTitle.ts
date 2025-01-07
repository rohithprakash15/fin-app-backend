import { Discussion as TDiscussion } from "../api/discussion/Discussion";

export const DISCUSSION_TITLE_FIELD = "audioContent";

export const DiscussionTitle = (record: TDiscussion): string => {
  return record.audioContent?.toString() || String(record.id);
};
