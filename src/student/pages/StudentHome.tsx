import Header from "../components/home/Header";
import ToolCard from "../components/home/ToolCard";
import RecentChatCard from "../../components/common/RecentChatCard";
import { useChatSessions } from "../../hooks/useChatSessions";
import darsyar from "./../../assets/images/darsyar.webp";
import azmon from "./../../assets/images/azmon.webp";
import konjkav from "./../../assets/images/konjkav.webp";
import tarkibkon from "./../../assets/images/tarkibkon.webp";

const StudentHome = () => {
  const { data: chatSessions = [], isLoading: chatsLoading } = useChatSessions();

  const hasRecentChatsForTool = (tool: string) => {
    return chatSessions.some((session) => session.tool === tool);
  };

  return (
    <div className="bg-backGround-1 min-h-screen pb-10">
      <Header />

      <div className=" mx-[24px] pt-[80px]">
        <h1 className="mb-[16px] font-extrabold text-[14px]">ابزار‌ها</h1>
        <div className="mb-[24px]">
          <div className="flex justify-center items-stretch mb-[40px] gap-[12px]">
            <ToolCard
              title="درس‌یـــــار"
              description="بهت کمک می‌کنه، درسا رو بهتر بفهمی!"
              tool="DARS_YAR"
              hasRecentChats={hasRecentChatsForTool("DARS_YAR")}
              image={darsyar}
            />
            <ToolCard
              title="آزمون‌ســـاز"
              description="کلی نمونه سوال حرفه‌ای برات طراحی می‌کنه!"
              tool="AZMOON_SAZ"
              hasRecentChats={hasRecentChatsForTool("AZMOON_SAZ")}
              image={azmon}
            />
          </div>
          <div className="flex justify-center items-stretch gap-[12px]">
            <ToolCard
              title="ترکــــــیب‌کن"
              description="درسارو همونطوری که خودت دوست داری یادبگیر."
              tool="TARKIB_KON"
              hasRecentChats={hasRecentChatsForTool("TARKIB_KON")}
              image={tarkibkon}
            />
            <ToolCard
              title="کنج‌کـــاو"
              description="همراه خوب تو برای یادگرفتن چیزای جدید!"
              tool="KONJKAV_SHO"
              hasRecentChats={hasRecentChatsForTool("KONJKAV_SHO")}
              image={konjkav}
            />
          </div>
        </div>

        <h3 className="font-extrabold text-right text-[14px] mb-[16px]">
          چت‌های اخیر
        </h3>
        <div className="space-y-[12px]">
          {chatsLoading ? (
            <div className="text-center py-4">در حال بارگذاری...</div>
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
  );
};

export default StudentHome;