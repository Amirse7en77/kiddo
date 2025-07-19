import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";
import Chat from "../../../components/common/Chat";
import { startKonjkavSession } from "../../../api-chat";
import { ChatSession } from "../../../types/api";

interface Study {
    id: string;
    name: string;
}

interface RootState {
  konjkav: {
    selectedStudy: Study | null;
    selectedTopic: string;
  };
}

const KonjkavTopicBot = () => {
  const navigate = useNavigate();
  const [isChatting, setIsChatting] = useState(false);
  const { selectedStudy, selectedTopic } = useSelector((state: RootState) => state.konjkav);

  useEffect(() => {
    if (!selectedStudy || !selectedTopic) {
      navigate('/student/konjkav/study-selection');
    }
  }, [selectedStudy, selectedTopic, navigate]);
  
  const startSessionCallback = useCallback((): Promise<ChatSession> => {
    if (!selectedStudy || !selectedTopic) {
      return Promise.reject("Selections are not valid.");
    }
    return startKonjkavSession(selectedStudy.id, selectedTopic);
  }, [selectedStudy, selectedTopic]);

  if (!selectedStudy || !selectedTopic) {
    return null;
  }

  return (
    <div className="bg-backGround-1 h-screen flex flex-col">
      <Header title={'کنج‌کاو'} />
      <div className="flex-grow flex flex-col">
          <Chat 
            startSession={startSessionCallback}
            setIsChatting={setIsChatting} 
          />
      </div>
    </div>
  );
};

export default KonjkavTopicBot;