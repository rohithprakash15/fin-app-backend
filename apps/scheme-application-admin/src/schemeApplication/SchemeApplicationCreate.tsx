import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { SchemeTitle } from "../scheme/SchemeTitle";
import { UserTitle } from "../user/UserTitle";

export const SchemeApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="scheme.id" reference="Scheme" label="scheme">
          <SelectInput optionText={SchemeTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <DateTimeInput label="submittedAt" source="submittedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
