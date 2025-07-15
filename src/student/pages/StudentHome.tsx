import Header from "../components/home/Header";
import ToolCard from "../components/home/ToolCard";
import { useClientInfo } from "../../hooks/useClientInfo";
import RecentChatCard from "../../components/common/RecentChatCard";
import { useChatSessions } from "../../hooks/useChatSessions";

const StudentHome = () => {
  const { data: chatSessions = [], isLoading: chatsLoading } = useChatSessions();

  const hasRecentChatsForTool = (tool: string) => {
    return chatSessions.some(session => session.tool === tool);
  };

  return (
    <div className="h-screen bg-backGround-1">
      <Header />

      <div className="bg-backGround-1 pb-4">
        <div className="p-[16px]">
          <h1 className="mb-[40px] font-extrabold text-[14px]">ابزار‌ها</h1>

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

        <h3 className="font-extrabold text-right text-[14px] mr-[16px] mb-[16px]">
          چت‌های اخیر
        </h3>
        <div className="space-y-[12px] mx-[24px]">
          {chatsLoading ? (
            <div className="text-center py-4">در حال بارگذاری...</div>
          ) : chatSessions.length === 0 ? (
            <div className="text-center text-gray-500 py-4">هیچ چت اخیری وجود ندارد</div>
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
  );
};

export default StudentHome;
