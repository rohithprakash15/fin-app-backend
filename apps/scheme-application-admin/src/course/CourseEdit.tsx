import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LessonContentTitle } from "../lessonContent/LessonContentTitle";
import { UserProgressTitle } from "../userProgress/UserProgressTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="description" source="description" />
        <TextInput label="icon" source="icon" />
        <ReferenceArrayInput source="lessonContents" reference="LessonContent">
          <SelectArrayInput
            optionText={LessonContentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
        <ReferenceArrayInput source="userProgresses" reference="UserProgress">
          <SelectArrayInput
            optionText={UserProgressTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
