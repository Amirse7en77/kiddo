import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";
import Chat from "../../../components/common/Chat";
import { startTarkibkonSession } from "../../../api-chat";
import { ChatSession } from "../../../types/api";

interface Study {
    id: string;
    name: string;
}

interface RootState {
  tarkibkon: {
    selectedStudy: Study | null;
    learnTopic: string;
    favoriteTopic: string;
  };
}

const TarkibkonChatBot = () => {
  const navigate = useNavigate();
  const [isChatting, setIsChatting] = useState(false);
  const { selectedStudy, learnTopic, favoriteTopic } = useSelector((state: RootState) => state.tarkibkon);

  useEffect(() => {
    if (!selectedStudy || !learnTopic || !favoriteTopic) {
      navigate('/student/tarkibkon/study-selection');
    }
  }, [selectedStudy, learnTopic, favoriteTopic, navigate]);
  
  const startSessionCallback = useCallback((): Promise<ChatSession> => {
    if (!selectedStudy || !learnTopic || !favoriteTopic) {
      return Promise.reject("Selections are not valid.");
    }
    return startTarkibkonSession(selectedStudy.id, learnTopic, favoriteTopic);
  }, [selectedStudy, learnTopic, favoriteTopic]);

  if (!selectedStudy || !learnTopic || !favoriteTopic) {
    return null;
  }

  const initialMessage = `...در حال ترکیب کردن ${learnTopic} با ${favoriteTopic}`;

  return (
    <div className="bg-backGround-1 h-screen flex flex-col">
      <Header title={'ترکــــــیب‌کن'} />
      <div className="flex-grow flex flex-col">
          <Chat 
            startSession={startSessionCallback}
            setIsChatting={setIsChatting}
            tool="TARKIB_KON"
            initialUserActionText={initialMessage}
          />
      </div>
    </div>
  );
};

export default TarkibkonChatBot;