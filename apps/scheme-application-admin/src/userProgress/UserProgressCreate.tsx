import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { UserTitle } from "../user/UserTitle";

export const UserProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="completed" source="completed" />
        <div />
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="lastAccessedAt" source="lastAccessedAt" />
        <NumberInput step={1} label="progress" source="progress" />
        <DateTimeInput label="startedAt" source="startedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
