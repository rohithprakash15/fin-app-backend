import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LanguageContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="audioContent" source="audioContent" />
        <TextInput label="contentId" source="contentId" />
        <TextInput label="contentType" source="contentType" />
        <TextInput label="language" source="language" />
        <TextInput label="textContent" source="textContent" />
      </SimpleForm>
    </Create>
  );
};
