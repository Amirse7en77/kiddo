import Header from "../../components/common/Header";
import ChatBot from "../../components/darsYar/chatWithBot/ChatBot";
import LessonInformation from "../../components/darsYar/chatWithBot/LessonInformation";
import HeroSection from "../../components/darsYar/chatWithBot/HeroSection";
import { useState } from "react";

const ChatWithBot = () => {
  const [isChatting, setIsChatting] = useState<boolean>(false);
  console.log(isChatting);
  return (
    <div className="bg-backGround-1">
      <Header />
      <div>
        {!isChatting && (
          <div>
            <LessonInformation />
            <HeroSection />
          </div>
        )}
        {/* Pass setIsChatting correctly */}
        <ChatBot setIsChatting={setIsChatting} isChatting={isChatting} />
      </div>
    </div>
  );
};

export default ChatWithBot;