import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import HeroSection from '../../components/darsYar/studySelection/HeroSection';
import MainContent from '../../components/darsYar/studySelection/MainContent';
import ChatButton from '../../../components/common/ChatButton';
import DisableChatButton from '../../../components/common/DisableChatButton';
import { setSelectedLesson } from '../../../slice/darsyarSlice';

const DarsyarStudySelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoButton: boolean = useSelector((state) => state?.darsyar?.studySelectionButton);

  const handleNext = () => {
    navigate('/student/darsyar/lesson-selection');
  };

  // When a lesson is selected:
  const handleLessonSelect = (selectedLessonValue) => {
    dispatch(setSelectedLesson(selectedLessonValue));
  };

  return (
    <div className="h-screen">
      <Header title={'درس‌یار'} />
      <div className='font-yekanBakh bg-backGround-1 pb-20'> {/* Increased pb to avoid overlap with draggable MainContent */}
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

export default DarsyarStudySelection;