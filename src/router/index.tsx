import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import RecentChat from "../pages/RecentChat";
import StudyAssistant from "../pages/StudyAssistant";
import StudySelection from "../pages/StudySelection";
import LessonSelection from "../pages/LessonSelection";
import ChatBot from "../components/chatWithBot/ChatBot";
import ChatWithBot from "../pages/ChatWithBot";

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
        ]
    }
])