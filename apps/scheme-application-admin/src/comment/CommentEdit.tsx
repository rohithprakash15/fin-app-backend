import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DiscussionTitle } from "../discussion/DiscussionTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="audioContent" source="audioContent" />
        <TextInput label="content" source="content" />
        <ReferenceInput
          source="discussion.id"
          reference="Discussion"
          label="discussion"
        >
          <SelectInput optionText={DiscussionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
