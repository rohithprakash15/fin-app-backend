import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { DISCUSSION_TITLE_FIELD } from "../discussion/DiscussionTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { SCHEME_TITLE_FIELD } from "../scheme/SchemeTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Comment"
          target="userId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="audioContent" source="audioContent" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="discussion"
              source="discussion.id"
              reference="Discussion"
            >
              <TextField source={DISCUSSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Discussion"
          target="userId"
          label="Discussions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="audioContent" source="audioContent" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="language" source="language" />
            <TextField label="likes" source="likes" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SchemeApplication"
          target="userId"
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
        <ReferenceManyField
          reference="UserProgress"
          target="userId"
          label="UserProgresses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="completed" source="completed" />
            <TextField label="completedLessons" source="completedLessons" />
            <ReferenceField
              label="course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="lastAccessedAt" source="lastAccessedAt" />
            <TextField label="progress" source="progress" />
            <TextField label="startedAt" source="startedAt" />
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
