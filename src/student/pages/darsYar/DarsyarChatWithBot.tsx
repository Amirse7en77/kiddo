import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LessonInformation from "../../components/darsYar/chatWithBot/LessonInformation";
import ChatBot from "../../components/darsYar/chatWithBot/ChatBot";
import Header from "../../../components/common/Header";
import { useNavigate } from "react-router-dom";

interface Study {
  id: string;
  name: string;
}

interface RootState {
  darsyar: {
    selectedStudy: Study | null;
    selectedLessons: { id: string; name: string; }[];
  };
}

const DarsyarChatWithBot = () => {
  const navigate = useNavigate();
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const selectedStudy = useSelector((state: RootState) => state.darsyar.selectedStudy);
  const selectedLessons = useSelector((state: RootState) => state.darsyar.selectedLessons);
 

  useEffect(() => {
    if (!selectedStudy || selectedLessons.length === 0) {
      navigate('/student/darsyar/study-assistant');
    }
  }, [selectedStudy, selectedLessons, navigate]);

  // If no study or lessons are selected, don't render anything while redirecting
  if (!selectedStudy || selectedLessons.length === 0) {
    return null;
  }

  return (
    <div className="bg-backGround-1">
      <Header title={'درس‌یار'} />
      <div>
        {!isChatting && (
          <div>
            <LessonInformation 
              study={selectedStudy.name}
              lesson={selectedLessons.map(l => l.name).join(', ')}
            />
          </div>
        )}
        <ChatBot setIsChatting={setIsChatting} isChatting={isChatting} />
      </div>
    </div>
  );
};

export default DarsyarChatWithBot;