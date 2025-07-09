import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import RecentChat from "../pages/darsYar/RecentChat";
import StudyAssistant from "../pages/darsYar/StudyAssistant";
import StudySelection from "../pages/darsYar/StudySelection";
import LessonSelection from "../pages/darsYar/LessonSelection";

import ChatWithBot from "../pages/darsYar/ChatWithBot";
import Welcome from "../pages/konjKav/Welcome";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'recentChat',
                element:<RecentChat/>
            },
             {
                path:'studyAssistant',
                element:<StudyAssistant/>
            },
             {
                path:'studySelection',
                element:<StudySelection/>
            },
             {
                path:'lessonSelection',
                element:<LessonSelection/>
            },
             {
                path:'chatWithBot',
                element:<ChatWithBot/>
            },
            {
                path:'welcome',
                element:<Welcome/>
            },
        ]
    }
])