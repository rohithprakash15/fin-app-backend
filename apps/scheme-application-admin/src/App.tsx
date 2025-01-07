import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { LessonContentList } from "./lessonContent/LessonContentList";
import { LessonContentCreate } from "./lessonContent/LessonContentCreate";
import { LessonContentEdit } from "./lessonContent/LessonContentEdit";
import { LessonContentShow } from "./lessonContent/LessonContentShow";
import { SchemeApplicationList } from "./schemeApplication/SchemeApplicationList";
import { SchemeApplicationCreate } from "./schemeApplication/SchemeApplicationCreate";
import { SchemeApplicationEdit } from "./schemeApplication/SchemeApplicationEdit";
import { SchemeApplicationShow } from "./schemeApplication/SchemeApplicationShow";
import { LanguageContentList } from "./languageContent/LanguageContentList";
import { LanguageContentCreate } from "./languageContent/LanguageContentCreate";
import { LanguageContentEdit } from "./languageContent/LanguageContentEdit";
import { LanguageContentShow } from "./languageContent/LanguageContentShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { UserProgressList } from "./userProgress/UserProgressList";
import { UserProgressCreate } from "./userProgress/UserProgressCreate";
import { UserProgressEdit } from "./userProgress/UserProgressEdit";
import { UserProgressShow } from "./userProgress/UserProgressShow";
import { DiscussionList } from "./discussion/DiscussionList";
import { DiscussionCreate } from "./discussion/DiscussionCreate";
import { DiscussionEdit } from "./discussion/DiscussionEdit";
import { DiscussionShow } from "./discussion/DiscussionShow";
import { SchemeList } from "./scheme/SchemeList";
import { SchemeCreate } from "./scheme/SchemeCreate";
import { SchemeEdit } from "./scheme/SchemeEdit";
import { SchemeShow } from "./scheme/SchemeShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"scheme-application"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="LessonContent"
          list={LessonContentList}
          edit={LessonContentEdit}
          create={LessonContentCreate}
          show={LessonContentShow}
        />
        <Resource
          name="SchemeApplication"
          list={SchemeApplicationList}
          edit={SchemeApplicationEdit}
          create={SchemeApplicationCreate}
          show={SchemeApplicationShow}
        />
        <Resource
          name="LanguageContent"
          list={LanguageContentList}
          edit={LanguageContentEdit}
          create={LanguageContentCreate}
          show={LanguageContentShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="UserProgress"
          list={UserProgressList}
          edit={UserProgressEdit}
          create={UserProgressCreate}
          show={UserProgressShow}
        />
        <Resource
          name="Discussion"
          list={DiscussionList}
          edit={DiscussionEdit}
          create={DiscussionCreate}
          show={DiscussionShow}
        />
        <Resource
          name="Scheme"
          list={SchemeList}
          edit={SchemeEdit}
          create={SchemeCreate}
          show={SchemeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
