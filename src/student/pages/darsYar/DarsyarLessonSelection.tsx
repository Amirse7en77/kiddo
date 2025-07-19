import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ChatButton from "../../../components/common/ChatButton";
import DisableChatButton from "../../../components/common/DisableChatButton";
import Header from "../../../components/common/Header";
import MainContent from "../../components/darsYar/lessonSelection/MainContent";
import HeroSection from "../../components/darsYar/lessonSelection/HeroSection";

interface RootState {
  darsyar: {
    studySelectionButton: boolean;
    selectedStudy: string | null;
    selectedLessons: string[];
    hasSelectedLessons: boolean;
  };
}

const DarsyarLessonSelection = () => {
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const selectedStudy = useSelector((state: RootState) => state.darsyar.selectedStudy);
  const selectedLessons = useSelector((state: RootState) => state.darsyar.selectedLessons);

    useEffect(() => {
    // Navigate to login page if selections are missing
    if (!selectedStudy ) {
      navigate('/'); 
    }
  }, [selectedStudy, navigate]);
  useEffect(() => {
    if (shouldNavigate && selectedStudy && selectedLessons.length > 0) {
      navigate('/student/darsyar/chat');
    }
  }, [shouldNavigate, selectedStudy, selectedLessons, navigate]);

  const handleStartChat = () => {
    setShouldNavigate(true);
  };

  // Check both conditions for button activation
  const isButtonActive = selectedStudy !== null && selectedLessons.length > 0;

  return (
    <div>
      <div>
        <Header title={'درس‌یار'} />
        <div className='bg-backGround-1'>
          <HeroSection />
          <MainContent />
        </div>
        {isButtonActive ? (
          <ChatButton textButton='ساخت چت جدید' onClick={handleStartChat} />
        ) : (
          <DisableChatButton textButton='ساخت چت جدید' />
        )}
      </div>
    </div>
  );
};

export default DarsyarLessonSelection;
