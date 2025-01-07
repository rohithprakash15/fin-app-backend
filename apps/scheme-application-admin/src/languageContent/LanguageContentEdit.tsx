import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LanguageContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="audioContent" source="audioContent" />
        <TextInput label="contentId" source="contentId" />
        <TextInput label="contentType" source="contentType" />
        <TextInput label="language" source="language" />
        <TextInput label="textContent" source="textContent" />
      </SimpleForm>
    </Edit>
  );
};
