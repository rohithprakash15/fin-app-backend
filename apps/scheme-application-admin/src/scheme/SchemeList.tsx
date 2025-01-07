import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SchemeList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Schemes"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
