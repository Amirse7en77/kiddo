// src/pages/StudySelection.tsx

import Header from '../../components/common/Header';
import HeroSection from '../../components/darsYar/studySelection/HeroSection';
import MainContent from '../../components/darsYar/studySelection/MainContent'; // This is now draggable
import ChatButton from '../../components/common/ChatButton';

const StudySelection = () => {
   

  return (
    <div className="h-screen">
      <Header />
      <div className='font-yekanBakh bg-backGround-1 pb-20'> {/* Increased pb to avoid overlap with draggable MainContent */}
        <HeroSection />
         <MainContent />
      </div>
      <ChatButton textButton=' بعدی '/>


     
    </div>
  );
};

export default StudySelection;