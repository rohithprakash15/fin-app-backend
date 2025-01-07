import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LanguageContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LanguageContents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="audioContent" source="audioContent" />
        <TextField label="contentId" source="contentId" />
        <TextField label="contentType" source="contentType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <TextField label="textContent" source="textContent" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
