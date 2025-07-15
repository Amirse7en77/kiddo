import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import DarsyarRecentChat from "../student/pages/darsYar/DarsyarRecentChat";
import DarsyarWelcome from "../student/pages/darsYar/DarsyarStudyAssistant";
import DarsyarStudySelection from "../student/pages/darsYar/DarsyarStudySelection";
import DarsyarLessonSelection from "../student/pages/darsYar/DarsyarLessonSelection";
import DarsyarChatWithBot from "../student/pages/darsYar/DarsyarChatWithBot";
import KonjkavWelcome from "../student/pages/konjKav/KonjkavWelcome";
import KonjkavTopicSelection from "../student/pages/konjKav/KonjkavTopicSelection";
import KonjkavTopicBot from "../student/pages/konjKav/KonjkavTopicBot";
import KonjkavRecentChat from "../student/pages/konjKav/KonjkavRecentChat";
import KonjkavStudySelection from "../student/pages/konjKav/KonjkavStudySelection";
import TarkibkonWelcome from "../student/pages/tarkibKon/TarkibkonWelcome";
import TarkibkonRecentChat from "../student/pages/tarkibKon/TarkibkonRecentChat";
import TarkibkonStudySelection from "../student/pages/tarkibKon/TarkibkonStudySelection";
import StudentHome from "../student/pages/StudentHome";
import TeacherHome from "../teacher/pages/TeacherHome";
import ContentContainer from "../teacher/pages/ContentContainer";
import Reports from "../teacher/pages/Reports";
import Login from "../login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/student",
        element: <StudentHome />,
      },
      {
        path: "/teacher",
        element: <TeacherHome />,
      },
      {
        path: "/content",
        element: <ContentContainer />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      // DarsYar routes
      {
        path: "/student/darsyar/recent-chat",
        element: <DarsyarRecentChat />,
      },
      {
        path: "/student/darsyar/study-assistant",
        element: <DarsyarWelcome />,
      },
      {
        path: "/student/darsyar/study-selection",
        element: <DarsyarStudySelection />,
      },
      {
        path: "/student/darsyar/lesson-selection",
        element: <DarsyarLessonSelection />,
      },
      {
        path: "/student/darsyar/chat",
        element: <DarsyarChatWithBot />,
      },
      // KonjKav routes
      {
        path: "/student/konjkav/welcome",
        element: <KonjkavWelcome />,
      },
      {
        path: "/student/konjkav/recent-chat",
        element: <KonjkavRecentChat />,
      },
      {
        path: "/student/konjkav/study-selection",
        element: <KonjkavStudySelection />,
      },
      {
        path: "/student/konjkav/topic-selection",
        element: <KonjkavTopicSelection />,
      },
      {
        path: "/student/konjkav/chat",
        element: <KonjkavTopicBot />,
      },
      // Tarkibkon routes
      {
        path: "/student/tarkibkon/welcome",
        element: <TarkibkonWelcome />,
      },
      {
        path: "/student/tarkibkon/recent-chat",
        element: <TarkibkonRecentChat />,
      },
      {
        path: "/student/tarkibkon/study-selection",
        element: <TarkibkonStudySelection />,
      },
    ],
  },
]);
