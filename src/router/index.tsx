// src/router/index.tsx
import { createBrowserRouter, Outlet } from "react-router-dom";

// ... (all other imports remain the same)
import App from "../App";
import Login from "../login/Login";

// ... (import all your other components)
import TeacherHome from "../teacher/pages/TeacherHome";
import StudentHome from "../student/pages/StudentHome";
import ClassLayout from "../layout/ClassLayout";
import StudentsActivities from "../teacher/components/contentContainer/students/StudentsActivities";
import ClassChat from "../teacher/pages/ClassChat";
import DarsyarRecentChat from "../student/pages/darsYar/DarsyarRecentChat";
import DarsyarWelcome from "../student/pages/darsYar/DarsyarStudyAssistant";
import DarsyarStudySelection from "../student/pages/darsYar/DarsyarStudySelection";
import DarsyarLessonSelection from "../student/pages/darsYar/DarsyarLessonSelection";
import DarsyarChatWithBot from "../student/pages/darsYar/DarsyarChatWithBot";
import KonjkavWelcome from "../student/pages/konjKav/KonjkavWelcome";
import KonjkavRecentChat from "../student/pages/konjKav/KonjkavRecentChat";
import KonjkavStudySelection from "../student/pages/konjKav/KonjkavStudySelection";
import KonjkavTopicSelection from "../student/pages/konjKav/KonjkavTopicSelection";
import KonjkavTopicBot from "../student/pages/konjKav/KonjkavTopicBot";
import TarkibkonWelcome from "../student/pages/tarkibKon/TarkibkonWelcome";
import TarkibkonRecentChat from "../student/pages/tarkibKon/TarkibkonRecentChat";
import TarkibkonLearnTopic from "../student/pages/tarkibKon/TarkibkonLearnTopic";
import TarkibkonFavoriteTopic from "../student/pages/tarkibKon/TarkibkonFavoriteTopic";
import TarkibkonChatBot from "../student/pages/tarkibKon/TarkibkonChatBot";
import TarkibkonStudySelection from "../student/pages/tarkibKon/TarkibkonStudySelection";
import ReportsPage from "../teacher/pages/ReportsPage";

// The only change is to export the router instance
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true,
        element: <Login />,
      },
      // ... (all other routes remain exactly the same)
      {
        path: "teacher", 
        element: <TeacherHome />,
      },
      {
        path: "teacher", 
        element: <ClassLayout />,
        children: [
          {
            path: "students", 
            element: <StudentsActivities />,
          },
          {
            path: "reports",
            element: <ReportsPage />,
          },
          {
            path: "chat", 
            element: <ClassChat />,
          },
          
        ],
      },
      {
        path: "student",
        children: [
          {
            index: true,
            element: <StudentHome />,
          },
          {
            path: "darsyar",
            element: <Outlet />,
            children: [
              { path: "recent-chat", element: <DarsyarRecentChat /> },
              { path: "study-assistant", element: <DarsyarWelcome /> },
              { path: "study-selection", element: <DarsyarStudySelection /> },
              { path: "lesson-selection", element: <DarsyarLessonSelection /> },
              { path: "chat", element: <DarsyarChatWithBot /> },
            ],
          },
          {
            path: "konjkav",
            element: <Outlet />,
            children: [
              { path: "welcome", element: <KonjkavWelcome /> },
              { path: "recent-chat", element: <KonjkavRecentChat /> },
              { path: "study-selection", element: <KonjkavStudySelection /> },
              { path: "topic-selection", element: <KonjkavTopicSelection /> },
              { path: "chat", element: <KonjkavTopicBot /> },
            ],
          },
          {
            path: "tarkibkon",
            element: <Outlet />,
            children: [
              { path: "welcome", element: <TarkibkonWelcome /> },
              { path: "recent-chat", element: <TarkibkonRecentChat /> },
              { path: "study-selection", element: <TarkibkonStudySelection /> },
              { path: "learn-topic-selection", element: <TarkibkonLearnTopic /> },
              { path: "favorite-topic-selection", element: <TarkibkonFavoriteTopic /> },
              { path: "chat", element: <TarkibkonChatBot /> },
            ],
          },
        ],
      },
    ],
  },
], {
  basename: "/kiddo",
});