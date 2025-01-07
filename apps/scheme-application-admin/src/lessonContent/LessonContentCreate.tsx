import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const LessonContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="audioContent" source="audioContent" />
        <TextInput label="content" source="content" />
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="duration" source="duration" />
        <NumberInput step={1} label="order" source="order" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
