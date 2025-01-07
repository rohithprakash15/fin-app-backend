import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SchemeApplicationTitle } from "../schemeApplication/SchemeApplicationTitle";

export const SchemeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="applicationProcess" source="applicationProcess" />
        <TextInput label="audioDescription" source="audioDescription" />
        <TextInput label="benefits" source="benefits" />
        <TextInput label="category" source="category" />
        <TextInput label="description" source="description" />
        <div />
        <TextInput label="eligibility" source="eligibility" />
        <TextInput label="icon" source="icon" />
        <ReferenceArrayInput
          source="schemeApplications"
          reference="SchemeApplication"
        >
          <SelectArrayInput
            optionText={SchemeApplicationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
