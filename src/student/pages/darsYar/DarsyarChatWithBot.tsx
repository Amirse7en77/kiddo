
import { useState } from "react";

import LessonInformation from "../../components/darsYar/chatWithBot/LessonInformation";

import ChatBot from "../../components/darsYar/chatWithBot/ChatBot";
import Header from "../../../components/common/Header";

const DarsyarChatWithBot = () => {
  const [isChatting, setIsChatting] = useState<boolean>(false);
  console.log(isChatting);
  return (
    <div className="bg-backGround-1">
      <Header title={'درس‌یار'}/>
      <div>
        {!isChatting && (
          <div>
            <LessonInformation />
            
          </div>
        )}
        {/* Pass setIsChatting correctly */}
        <ChatBot setIsChatting={setIsChatting} isChatting={isChatting} />
      </div>
    </div>
  );
};

export default DarsyarChatWithBot;