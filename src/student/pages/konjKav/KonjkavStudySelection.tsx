import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { setSelectedStudy } from '../../../slice/konjkavSlice';
import MainContent from '../../components/konjKav/studySelection/MainContent';
import HeroSection from '../../components/konjKav/studySelection/HeroSection';
import { useState } from 'react';

const KonjkavStudySelection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleStudySelect = (study: string) => {
    if (study) {
      dispatch(setSelectedStudy(study));
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const handleContinue = () => {
    if (isButtonActive) {
      navigate('/student/konjkav/topic-selection');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFF]">
      <HeroSection />
      <MainContent onStudySelect={handleStudySelect} />
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleContinue}
          className={`w-full py-3 rounded-lg text-white font-bold transition-all duration-300 ${
            isButtonActive
              ? 'bg-primary hover:bg-primary-dark'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!isButtonActive}
        >
          ادامه
        </button>
      </div>
    </div>
  );
};

export default KonjkavStudySelection;