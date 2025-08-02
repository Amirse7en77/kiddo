// src/teacher/pages/TeacherHome.tsx

import React from "react";
import Header from "../../student/components/home/Header";
import Classes from "../components/home/Classes";
import ToolCard from './../components/home/ToolCard'
import RecentChatCard from "../../components/common/RecentChatCard";
import { useChatSessions } from "../../hooks/useChatSessions";
import { useNavigate } from "react-router-dom";
import darsyar from './../../assets/images/darsyar.webp'
import azmon from './../../assets/images/azmon.webp'
import tarkibkon from './../../assets/images/tarkibkon.webp'
import konjkav from './../../assets/images/konjkav.webp'
import LoadingIndicator from "../../components/common/LoadingIndicator";

const TeacherHome = () => {
  const navigate=useNavigate()
  const { data: chatSessions = [], isLoading, isError } = useChatSessions();

  const hasRecentChatsForTool = (tool: string) => {
    return chatSessions.some((session) => session.tool === tool);
  };
  const handleClasses=()=>{
    navigate('/teacher/students')
  }

  return (
    <div>
      <Header />
      <div className="bg-backGround-1 min-h-screen pb-10">
        <div className="p-[24px] gap-[16px] pt-[80px]">
          <div >
            <h1 className="mb-[16px]">کلاس‌ها</h1>
            <div onClick={handleClasses}>
              <Classes />
            </div>
           
          </div>
          <div>
            <h1 className="pt-[20px] pb-[16px]">ابزار‌ها</h1>
            <div className="mb-[24px]">
              <div className="flex justify-center items-stretch mb-[12px] gap-[12px]">
                    <ToolCard
                  title="درس‌یـــــار"
                  description='بهت کمک می‌کنه، درسا رو بهتر بفهمی!'
                  tool="DARS_YAR"
                  hasRecentChats={hasRecentChatsForTool("DARS_YAR")}
                  image={darsyar}
                />
                <ToolCard
                  title="آزمون‌ســـاز"
                  description='کلی نمونه سوال حرفه‌ای برات طراحی می‌کنه!'
                  tool="AZMOON_SAZ"
                  hasRecentChats={hasRecentChatsForTool("AZMOON_SAZ")}
                  image={azmon}
                />
               
              </div>
              <div className="flex justify-center items-stretch gap-[12px]">
             <ToolCard 
                  title="ترکــــــیب‌کن"
                  description='درسارو همونطوری که خودت دوست داری یادبگیر.'
                  tool="TARKIB_KON"
                  hasRecentChats={hasRecentChatsForTool("TARKIB_KON")}
                  image={tarkibkon}
                />
                <ToolCard
                  title="کنج‌کـــاو"
                  description='همراه خوب تو برای یادگرفتن چیزای جدید!'
                  tool="KONJKAV_SHO"
                  hasRecentChats={hasRecentChatsForTool("KONJKAV_SHO")}
                  image={konjkav}
                />
              </div>
            </div>
          </div>
          
          <h3 className="font-extrabold text-right text-[14px] mt-[32px] mb-[16px]">
            چت‌های اخیر
          </h3>
          <div className="space-y-[12px]">
              {isLoading ? (
                <div className="flex justify-center items-center text-center">
                  <LoadingIndicator className="w-10 h-10 " />
                </div>
              ) : isError ? (
              <div className="text-center text-red-500 py-4">
                خطا در بارگذاری چت‌ها
              </div>
            ) : chatSessions.length === 0 ? (
              <div className="text-center text-gray-500 py-4">
                هیچ چت اخیری وجود ندارد
              </div>
            ) : (
              chatSessions.map((session) => (
                <RecentChatCard
                  key={session.id}
                  id={session.id}
                  title={session.title}
                  tool={session.tool}
                  subject={session.subject}
                  updatedAt={session.updated_at}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;