import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../student/pages/StudentHome";
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



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/student',
        element: <StudentHome />,
      },
      {
        path:'/teacher',
        element: <TeacherHome />,
      },
       {
        path:'/content',
        element: <ContentContainer />,
      },

      {
        path: "darsyar/recent-chat",
        element: <DarsyarRecentChat />,
      },
      {
        path: "darsyar/study-assistant",
        element: <DarsyarWelcome />,
      },
      {
        path: "darsyar/study-selection",
        element: <DarsyarStudySelection />,
      },
      {
        path: "darsyar/lesson-selection",
        element: <DarsyarLessonSelection />,
      },
      {
        path: "darsyar/chat-with-bot",
        element: <DarsyarChatWithBot />,
      },
      {
        path: "konjkav/welcome",
        element: <KonjkavWelcome />,
      },
      {
        path: "konjkav/topic-selection",
        element: <KonjkavTopicSelection />,
      },
      {
        path: "konjkav/topic-bot",
        element: <KonjkavTopicBot />,
      },
      {
        path: "konjkav/recent-chat",
        element: <KonjkavRecentChat />,
      },
      {
        path: "konjkav/study-selection",
        element: <KonjkavStudySelection />,
      },
      {
        path: "tarkibkon/welcome",
        element: <TarkibkonWelcome />,
      },
      {
        path: "tarkibkon/recent-chat",
        element: <TarkibkonRecentChat />,
      },
      {
        path: "tarkibkon/study-selection",
        element: <TarkibkonStudySelection />,
      },

      {
        path: "tarkibkon/recent-chat",
        element: <TarkibkonRecentChat />,
      },
      {
        path: "tarkibkon/recent-chat",
        element: <TarkibkonRecentChat />,
      },
    ],
  },
]);
