// src/pages/StudySelection.tsx

import Header from '../../../components/common/Header';
import HeroSection from '../../../student/components/darsYar/studySelection/HeroSection';
import MainContent from '../../../student/components/darsYar/studySelection/MainContent'; // This is now draggable
import ChatButton from '../../../components/common/ChatButton';

const TarkibkonStudySelection = () => {
   

  return (
    <div className="h-screen">
      <Header title={'ترکیب‌کن'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'> {/* Increased pb to avoid overlap with draggable MainContent */}
        <HeroSection />
         <MainContent />
      </div>
      <ChatButton textButton=' بعدی '/>


     
    </div>
  );
};

export default TarkibkonStudySelection;