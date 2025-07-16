import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import HeroSection from '../../components/konjKav/studySelection/HeroSection';
import MainContent from '../../components/konjKav/studySelection/MainContent';
import ChatButton from '../../../components/common/ChatButton';
import DisableChatButton from '../../../components/common/DisableChatButton';
import { setSelectedStudy } from '../../../slice/konjkavSlice';
import { RootState } from '../../../store';

const KonjkavStudySelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoButton = useSelector((state: RootState) => state.konjkav.studySelectionButton);

  const handleNext = () => {
    navigate('/student/konjkav/topic-selection');
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