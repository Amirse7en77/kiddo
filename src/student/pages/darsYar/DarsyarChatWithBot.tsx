// src/student/pages/darsYar/DarsyarChatWithBot.tsx
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LessonInformation from "../../components/darsYar/chatWithBot/LessonInformation";
import Header from "../../../components/common/Header";
import Chat from "../../../components/common/Chat";
import { startDarsYarSession } from "../../../api-chat";
import { ChatSession } from "../../../types/api";

interface Study {
  id: string;
  name: string;
}

interface RootState {
  darsyar: {
    selectedStudy: Study | null;
    selectedLessons: { id:string; name: string; }[];
  };
}

const DarsyarChatWithBot = () => {
  const navigate = useNavigate();
  const [isChatting, setIsChatting] = useState(false);
  const [showLessonInfo, setShowLessonInfo] = useState(true);
  const selectedStudy = useSelector((state: RootState) => state.darsyar.selectedStudy);
  const selectedLessons = useSelector((state: RootState) => state.darsyar.selectedLessons);

  useEffect(() => {
    // Navigate to login page if selections are missing
    if (!selectedStudy || selectedLessons.length === 0) {
      navigate('/'); 
    }
  }, [selectedStudy, selectedLessons, navigate]);
  
  const startSessionCallback = useCallback((): Promise<ChatSession> => {
    if (!selectedStudy || selectedLessons.length === 0) {
      return Promise.reject("Selections are not valid.");
    }
    return startDarsYarSession(
      selectedStudy.id,
      selectedLessons.map(lesson => lesson.id)
    );
  }, [selectedStudy, selectedLessons]);

  // Render nothing while redirecting
  if (!selectedStudy || selectedLessons.length === 0) {
    return null;
  }

  return (
    <div className="bg-backGround-1 h-screen flex flex-col">
      <Header title={'درس‌یار'} />
      {showLessonInfo && (
        <LessonInformation 
          study={selectedStudy.name}
          lesson={selectedLessons.map(l => l.name).join('، ')}
        />
      )}
      {/* 
        The padding-top here is only to push the chat content down to avoid the LessonInformation bar.
        The Header component already includes a 52px spacer.
        The LessonInformation bar is about 40px high. So we add pt-[40px].
      */}
      <main className={`flex-grow flex flex-col transition-all duration-300 ${showLessonInfo ? 'pt-[40px]' : ''}`}>
          <Chat 
            startSession={startSessionCallback}
            setIsChatting={setIsChatting}
          />
      </main>
    </div>
  );
};

export default DarsyarChatWithBot;