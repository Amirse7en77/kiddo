// src/pages/StudySelection.tsx

import ChatButton from "../../../components/common/ChatButton";
import Header from "../../../components/common/Header";
import HeroSection from "../../components/darsYar/studySelection/HeroSection";
import MainContent from "../../components/darsYar/studySelection/MainContent";


const KonjkavStudySelection = () => {
   

  return (
    <div className="h-screen">
      <Header title={'کنج‌کاو'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'> {/* Increased pb to avoid overlap with draggable MainContent */}
        <HeroSection />
         <MainContent />
      </div>
      <ChatButton textButton=' بعدی '/>


     
    </div>
  );
};

export default KonjkavStudySelection;