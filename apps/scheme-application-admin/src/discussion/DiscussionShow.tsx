import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DISCUSSION_TITLE_FIELD } from "./DiscussionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DiscussionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="audioContent" source="audioContent" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <TextField label="likes" source="likes" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Comment"
          target="discussionId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="audioContent" source="audioContent" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="discussion"
              source="discussion.id"
              reference="Discussion"
            >
              <TextField source={DISCUSSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
