import React from "react";
import Header from "../../student/components/home/Header";
import Classes from "../components/home/Classes";
import ToolCard from "../../student/components/home/ToolCard";
import RecentChatCard from "../../components/common/RecentChatCard";
import ProgressQuestion from "../components/home/ProgressQuestion";
import { useChatSessions } from "../../hooks/useChatSessions";
import { useNavigate } from "react-router-dom";

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
      <div className="bg-backGround-1 h-full">
        <div className="p-[24px] gap-[16px]">
          <div >
            <h1 className="pb-[16px]">کلاس‌ها</h1>
            <div onClick={handleClasses}>
              <Classes />
            </div>
           
          </div>
          <div>
            <h1 className="pt-[20px] pb-[32px]">ابزار‌ها</h1>
            <div className="mb-[24px]">
              <div className="flex justify-center items-center mb-[40px] gap-[12px]">
                <ToolCard
                  title="ترکیب‌کن"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                  tool="TARKIB_KON"
                  hasRecentChats={hasRecentChatsForTool("DARS_YAR")}
                />
                <ToolCard
                  title="کنج‌کاو"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                  tool="KONJKAV"
                  hasRecentChats={hasRecentChatsForTool("KONJKAV")}
                />
              </div>
              <div className="flex justify-center items-center gap-[12px]">
                <ToolCard
                  title="درس‌یار"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                  tool="DARS_YAR"
                  hasRecentChats={hasRecentChatsForTool("SOALYAR")}
                />
                <ToolCard
                  title="آزمون‌ساز"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                  tool="AZMOON_SAZ"
                  hasRecentChats={hasRecentChatsForTool("AZMOON_SAZ")}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-[16px]">وضعیت مصرف</h1>
            <ProgressQuestion progress={50} />
          </div>

          <h3 className="font-extrabold text-right text-[14px] mt-[32px] mb-[16px]">
            چت‌های اخیر
          </h3>
          <div className="space-y-[12px]">
            {isLoading ? (
              <div className="text-center py-4">در حال بارگذاری...</div>
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
