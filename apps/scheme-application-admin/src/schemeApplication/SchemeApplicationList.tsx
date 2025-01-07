import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SCHEME_TITLE_FIELD } from "../scheme/SchemeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SchemeApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SchemeApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="documents" source="documents" />
        <TextField label="ID" source="id" />
        <ReferenceField label="scheme" source="scheme.id" reference="Scheme">
          <TextField source={SCHEME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="submittedAt" source="submittedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
