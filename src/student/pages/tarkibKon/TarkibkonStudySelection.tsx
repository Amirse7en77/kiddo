import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setSelectedStudy } from "../../../slice/tarkibkonSlice";
import Header from "../../../components/common/Header";
import DisableChatButton from "../../../components/common/DisableChatButton";
import ChatButton from "../../../components/common/ChatButton";
import HeroSection from "../../components/tarkibKon/studySelection/HeroSection";
import MainContent from "../../components/tarkibKon/studySelection/MainContent";

const KonjkavStudySelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoButton = useSelector((state: RootState) => state.konjkav.studySelectionButton);

  const handleNext = () => {
    navigate('/student/tarkibkon/learn-topic-selection');
  };

  const handleLessonSelect = (selectedLessonValue: string) => {
    dispatch(setSelectedStudy(selectedLessonValue));
  };

  return (
    <div className="h-screen">
      <Header title={'کنجکاو'} />
      <div className='font-yekanBakh bg-backGround-1 pb-20'>
        <HeroSection />
        <MainContent onLessonSelect={handleLessonSelect} />
      </div>
      {infoButton ? (
        <ChatButton textButton='بعدی' onClick={handleNext} />
      ) : (
        <DisableChatButton textButton='بعدی' />
      )}
    </div>
  );
};

export default KonjkavStudySelection;