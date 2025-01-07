import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCHEME_TITLE_FIELD } from "./SchemeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SchemeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="applicationProcess" source="applicationProcess" />
        <TextField label="audioDescription" source="audioDescription" />
        <TextField label="benefits" source="benefits" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="documents" source="documents" />
        <TextField label="eligibility" source="eligibility" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SchemeApplication"
          target="schemeId"
          label="SchemeApplications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="documents" source="documents" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="scheme"
              source="scheme.id"
              reference="Scheme"
            >
              <TextField source={SCHEME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="submittedAt" source="submittedAt" />
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
