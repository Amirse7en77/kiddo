import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import Header from "../../../components/common/Header";
import DisableChatButton from "../../../components/common/DisableChatButton";
import ChatButton from "../../../components/common/ChatButton";
import HeroSection from "../../components/tarkibKon/studySelection/HeroSection";
import MainContent from "../../components/tarkibKon/studySelection/MainContent";

const TarkibkonStudySelection = () => {
  const navigate = useNavigate();
  const infoButton = useSelector((state: RootState) => state.tarkibkon.studySelectionButton);

  const handleNext = () => {
    navigate('/student/tarkibkon/learn-topic-selection');
  };

  return (
    <div className="h-screen">
      <Header title={'ترکــــــیب‌کن'} backPath="/student/tarkibkon/recent-chat" />
      <div className='font-yekanBakh bg-backGround-1 pb-18'>
        <HeroSection />
        <MainContent />
      </div>
      {infoButton ? (
        <ChatButton textButton='بعدی' onClick={handleNext} />
      ) : (
        <DisableChatButton textButton='بعدی' />
      )}
    </div>
  );
};

export default TarkibkonStudySelection;