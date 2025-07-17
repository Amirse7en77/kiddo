import { createBrowserRouter, Outlet } from "react-router-dom";

// Layouts and Pages
import App from "../App";
import Login from "../login/Login";

// Teacher Pages & Layout
import TeacherHome from "../teacher/pages/TeacherHome";




// Student Pages & Layout
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
// You might want a StudentLayout for all student pages
// const StudentLayout = () => <Outlet />; 

// ... import all your other student components

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Your main app shell (e.g., with a context provider)
    children: [
      // Login is the default page at the root path "/"
      {
        index: true,
        element: <Login />,
      },
             {
        path: "teacher", // This is specifically for TeacherHome
        element: <TeacherHome />,
      },
      {
        path: "teacher", // A new base path for routes under ClassLayout
        element: <ClassLayout />,
        children: [
          // All these paths are now relative to "teacher/class"
          {
            path: "students", // Corresponds to "/teacher/class/students"
            element: <StudentsActivities />,
          },
          {
            path: "reports", // Corresponds to "/teacher/class/reports"
            element: <ReportsPage />,
          },
          {
            path: "chat", // Corresponds to "/teacher/class/chat"
            element: <ClassChat />,
          },
          
        ],
      },


      // ===== STUDENT ROUTES =====
      {
        path: "student",
        // element: <StudentLayout />, // You could add a shared layout for all students here
        children: [
          {
            index: true, // Corresponds to "/student"
            element: <StudentHome />,
          },
          // --- DarsYar Sub-Routes ---
          {
            path: "darsyar",
            element: <Outlet />, // Use Outlet to nest further
            children: [
              { path: "recent-chat", element: <DarsyarRecentChat /> },
              { path: "study-assistant", element: <DarsyarWelcome /> },
              { path: "study-selection", element: <DarsyarStudySelection /> },
              { path: "lesson-selection", element: <DarsyarLessonSelection /> },
              { path: "chat", element: <DarsyarChatWithBot /> },
            ],
          },
          // --- KonjKav Sub-Routes ---
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
          // --- Tarkibkon Sub-Routes ---
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
]);