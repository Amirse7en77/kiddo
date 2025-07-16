import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";

import ChatBot from "../../components/konjKav/chatWithBot/ChatBot";

interface RootState {
  konjkav: {
    selectedStudy: string | null;
    selectedTopic: string[];
  };
}

const KonjkavTopicBot = () => {
  const navigate = useNavigate();
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const selectedStudy = useSelector((state: RootState) => state.konjkav.selectedStudy);
  const selectedTopic = useSelector((state: RootState) => state.konjkav.selectedTopic);
  console.log(selectedStudy,selectedTopic)
  useEffect(() => {
    if (!selectedStudy || selectedTopic.length === 0) {
      navigate('/student/konjkav/study-selection');
    }
  }, [selectedStudy, selectedTopic, navigate]);

  // If no study or topics are selected, don't render anything while redirecting
  if (!selectedStudy || selectedTopic.length === 0) {
    return null;
  }

  // Create the first message using selected study and topics
  const firstMessage = `${selectedStudy} میخواهم درباره ${selectedTopic} بیشتر بدانم.`;

  return (
    <div className="bg-backGround-1">
      <Header title={'کنج‌کاو'} />
      <div>
        
        <ChatBot 
          setIsChatting={setIsChatting} 
          isChatting={isChatting}
          firstMessage={firstMessage}
        />
      </div>
    </div>
  );
};

export default KonjkavTopicBot;