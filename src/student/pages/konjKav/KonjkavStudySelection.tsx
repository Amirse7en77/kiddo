import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import HeroSection from '../../components/konjKav/studySelection/HeroSection';
import MainContent from '../../components/konjKav/studySelection/MainContent';
import ChatButton from '../../../components/common/ChatButton';
import DisableChatButton from '../../../components/common/DisableChatButton';
import { RootState } from '../../../store';

const KonjkavStudySelection = () => {
  const navigate = useNavigate();
  const infoButton = useSelector((state: RootState) => state.konjkav.studySelectionButton);

  const handleNext = () => {
    navigate('/student/konjkav/topic-selection');
  };

  return (
    <div className="h-screen">
      <Header title={'کنج‌کـــاو'} />
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

export default KonjkavStudySelection;