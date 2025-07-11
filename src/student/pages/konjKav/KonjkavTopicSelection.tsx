// src/pages/StudySelection.tsx

import Header from '../../../components/common/Header';
import HeroSection from '../../../student/components/darsYar/studySelection/HeroSection';

import ChatButton from '../../../components/common/ChatButton';
import Topic from '../../../student/components/konjKav/topicSelection/Topic';

const KonjkavTopicSelection = () => {
   

  return (
    <div className="h-screen">
      <Header title={'کنج‌کاو'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'> {/* Increased pb to avoid overlap with draggable MainContent */}
        <HeroSection />
         <Topic/>
      </div>
      <ChatButton textButton=' بعدی '/>


     
    </div>
  );
};

export default KonjkavTopicSelection;