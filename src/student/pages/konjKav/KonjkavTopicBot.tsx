import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";

import ChatBot from "../../components/konjKav/chatWithBot/ChatBot";

interface RootState {
  konjkav: {
    selectedStudy: string | null;
    selectedTopics: string[];
  };
}

const KonjkavTopicBot = () => {
  const navigate = useNavigate();
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const selectedStudy = useSelector((state: RootState) => state.konjkav.selectedStudy);
  const selectedTopics = useSelector((state: RootState) => state.konjkav.selectedTopics);

  useEffect(() => {
    if (!selectedStudy || selectedTopics.length === 0) {
      navigate('/student/konjkav/study-selection');
    }
  }, [selectedStudy, selectedTopics, navigate]);

  // If no study or topics are selected, don't render anything while redirecting
  if (!selectedStudy || selectedTopics.length === 0) {
    return null;
  }

  // Create the first message using selected study and topics
  const firstMessage = `در مورد ${selectedStudy} میخواهم درباره ${selectedTopics.join('، ')} بیشتر بدانم.`;

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